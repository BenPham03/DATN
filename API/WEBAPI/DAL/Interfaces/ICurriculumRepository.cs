using DAL.Common;
using DAL.Models;
using DAL.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Interfaces
{
	public interface ICurriculumRepository : IGenericRepository<Curriculum>
	{
		public void UpdateStatus(CommonEntity entity);
	}
}
