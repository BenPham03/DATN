using BLL.Dto;
using BLL.Services.Base;
using DAL.Common;
using DAL.Infatructure;
using DAL.Interfaces;
using DAL.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Services
{
	public class SubjectService : BaseService<Subjects>
	{
		private readonly ISubjectRepository subjectRepository;

		public SubjectService(IUnitOfWork unitOfWork, ISubjectRepository subjectRepository) : base(unitOfWork)
		{
			this.subjectRepository = subjectRepository;
		}
		public int Active(Guid id)
		{
			if (id != Guid.Empty)
			{
				CommonEntity e = new CommonEntity()
				{
					Id = id,
					Status = Status.Active,
				};
				this.subjectRepository.UpdateStatus(e);
				return _unitOfWork.SaveChanges();
			}
			return 0;
		}
	}
}
