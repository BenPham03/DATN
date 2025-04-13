using DAL.Data;
using DAL.Interfaces;
using DAL.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Infatructure
{
	public interface IUnitOfWork
	{
		AppDbContext Context { get; }
		IFacultyRepository Faculty { get; }
		GenericRepository<TEntity> GenericRepository<TEntity>() where TEntity : class;
		int SaveChanges();
		Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
		Task BeginTransactionAsync();
		Task CommitTransactionAsync();
		Task RollBackTransactionAsync();
		void Dispose();
	}
}
