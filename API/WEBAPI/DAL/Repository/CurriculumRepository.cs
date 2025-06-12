using DAL.Common;
using DAL.Data;
using DAL.Interfaces;
using DAL.Models;

namespace DAL.Repository
{
	public class CurriculumRepository : GenericRepository<Curriculum>, ICurriculumRepository
	{
		public CurriculumRepository(AppDbContext context) : base(context)
		{
		}
		public void UpdateStatus(CommonEntity entity)
		{
			if (entity.Id != Guid.Empty)
			{
				var ent = _dbSet.FirstOrDefault(c => c.Id == entity.Id);
				if (ent != null)
				{
					ent.Status = entity.Status.Value;
				}
			}
		}
	}
}
