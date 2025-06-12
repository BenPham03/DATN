using DAL.Data;
using DAL.Interfaces;
using DAL.Models;

namespace DAL.Repository
{
	public class CurriculumSubjectRepository : GenericRepository<CurriculumSubjects>, ICurriculumSubjectRepository
	{
		public CurriculumSubjectRepository(AppDbContext context) : base(context)
		{
		}
	}
}
