using BLL.Dto;
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
	public class DepartmentService : BaseService<Departments>
	{
		public DepartmentService(IUnitOfWork unitOfWork) : base(unitOfWork)
		{
		}
	}
}
