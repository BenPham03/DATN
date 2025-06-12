using BLL.Services.Base;
using DAL.Infatructure;
using DAL.Models;

namespace BLL.Services
{
	public class CurriculumSubjectService : BaseService<CurriculumSubjects>
	{
		public CurriculumSubjectService(IUnitOfWork unitOfWork) : base(unitOfWork)
		{
		}
	}
}
