using BLL.Dto;
using BLL.Services.Base;
using DAL.Infatructure;
using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace BLL.Services
{
	public class CurriculumService : BaseService<Curriculum>
	{
		public CurriculumService(IUnitOfWork unitOfWork) : base(unitOfWork)
		{
		}
		public async Task<List<CurriculumDto>> GetCurriculumDetails(Guid id)
		{
			var curriculum = _unitOfWork.Context.Set<Curriculum>();
			var curriculumsubject = _unitOfWork.Context.Set<CurriculumSubjects>();
			var subjects = _unitOfWork.Context.Set<Subjects>();

			var result = await ((from c in curriculum
								 join cs in curriculumsubject on c.Id equals cs.CurriculumId
								 join s in subjects on cs.SubjectId equals s.Id
								 where c.Id == id
								 select new CurriculumDto
								 {
									 Id = c.Id,
									 Semester = cs.Semester,
									 SubjectCode = s.SubjectCode,
									 SubjectName = s.SubjectName,
									 Credits = s.PracticeCredits + s.TheoryCredits
								 })).ToListAsync();
			return result;
		}
	}
}
