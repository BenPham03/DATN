using DAL.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repository
{
	public class GenericRepository<T> : IGenericRepository<T> where T : class
	{
		protected readonly AppDbContext _context;
		protected DbSet<T> _dbSet;
		public GenericRepository(AppDbContext context)
		{
			_context = context;
			_dbSet = _context.Set<T>();
		}
		public void Add(T entity)
		{
			_dbSet.Add(entity);
		}

		public void Delete(Guid id)
		{
			var entity = _dbSet.Find(id);
			if (entity != null)
			{
				_dbSet.Remove(entity);
			}
		}

		public void Delete(T entity)
		{
			_dbSet.Remove(entity);
		}

		public IQueryable<T> Get(Expression<Func<T, bool>>? filter = null, Func<IQueryable<T>, IOrderedQueryable<T>>? orderBy = null, string includeProperties = "")
		{
			IQueryable<T> query = _dbSet;
			if(filter != null)
				query = query.Where(filter);
			if(!string.IsNullOrEmpty(includeProperties))
			{
				foreach (var property in includeProperties.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
				{
					query = query.Include(property);
				}
			}
			return orderBy == null? query : orderBy(query);
		}

		public IEnumerable<T> GetAll()
		{
			return _dbSet.ToList();
		}

		public async Task<IEnumerable<T>> GetAllAsync()
		{
			return await _dbSet.ToListAsync();
		}

		public T? GetById(Guid id)
		{
			return _dbSet.Find(id);
		}

		public async Task<T?> GetByIdAsync(Guid Id, string includeProperties = "")
		{
			IQueryable<T> query = _dbSet;
			if(!string.IsNullOrWhiteSpace(includeProperties))
			{
				foreach(var property in includeProperties.Split(new char[] {','}, StringSplitOptions.RemoveEmptyEntries))
				{
					query = query.Include(property);
				}

			}
			return await query.FirstOrDefaultAsync(e => EF.Property<Guid>(e, "Id") == Id);
		}

		public IQueryable<T> GetQuery()
		{
			return _dbSet;
		}

		public IQueryable<T> GetQuery(Expression<Func<T, bool>> predicate)
		{
			return _dbSet.Where(predicate);
		}

		public void Update(T entity)
		{
			var entry = _context.Entry(entity);
			if(entry.State == EntityState.Detached)
			{
				_dbSet.Attach(entity);
			}
			entry.State = EntityState.Modified;
		}
	}
}
