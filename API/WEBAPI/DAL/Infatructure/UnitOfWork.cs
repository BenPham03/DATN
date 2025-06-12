using DAL.Data;
using DAL.Interfaces;
using DAL.Repository;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Infatructure
{
	public class UnitOfWork : IUnitOfWork
	{
		private readonly AppDbContext _context;

		private readonly ConcurrentDictionary<Type, object> _repositories = new();
		public UnitOfWork(AppDbContext context)
		{
			_context = context;
		}
		public AppDbContext Context => _context;

		public IFacultyRepository Faculty { get; private set; }
		public ISubjectRepository Subject { get; private set; }

		public ISpecializationRepository Specialization { get; private set; }
		public IDepartmentRepository Department { get; private set; }
		public ICurriculumRepository Curriculum { get; private set; }

		public ICurriculumSubjectRepository CurriculumSubject { get; private set; }

		public async Task BeginTransactionAsync()
		{
			await _context.Database.BeginTransactionAsync();
		}

		public async Task CommitTransactionAsync()
		{
			await _context.Database.CommitTransactionAsync();
		}

		public void Dispose()
		{
			try
			{
				_context.Database.CurrentTransaction?.Rollback();
			}
			finally
			{
				_context.Dispose();
			}
		}

		public GenericRepository<TEntity> GenericRepository<TEntity>() where TEntity : class
		{
			return (GenericRepository<TEntity>)_repositories.GetOrAdd(
				typeof(TEntity),
				_ => new GenericRepository<TEntity>(_context));
		}

		public async Task RollBackTransactionAsync()
		{
			await _context.Database.RollbackTransactionAsync();
		}

		public int SaveChanges()
		{
			return _context.SaveChanges();
		}

		public async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
		{
			return await _context.SaveChangesAsync(cancellationToken);
		}
	}
}
