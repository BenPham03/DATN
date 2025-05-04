using BLL.Services.Base;
using DAL.Infatructure;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
	public class SpecializationService : BaseService<Specializations>
	{
		public SpecializationService(IUnitOfWork unitOfWork) : base(unitOfWork)
		{
		}
	}
}
