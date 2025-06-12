using DAL.Common;
using DAL.Data;
using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repository
{
	public class SubjectRepository : GenericRepository<Subjects>, ISubjectRepository
	{
		public SubjectRepository(AppDbContext context) : base(context)
		{
		}

		public void UpdateStatus(CommonEntity entity)
		{
			if(entity.Id != Guid.Empty)
			{
				var ent = _dbSet.FirstOrDefault(c => c.Id == entity.Id);
				if(ent != null)
				{
					ent.Status = entity.Status.Value;
				}
			}
		}
	}
}
