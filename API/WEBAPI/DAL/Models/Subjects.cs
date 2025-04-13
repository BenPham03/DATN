using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DAL.Models
{
	public class Subjects
	{
		public Guid Id { get; set; }
		public string SubjectName { get; set; }
		public string SubjectCode { get; set; }
		public int TheoryCredits { get; set; }
		public int PracticeCredits { get; set; }
		public Guid? SpecializationId { get; set; }
		public Guid? DepartmentId { get; set; }
		public Specializations? Specialization { get; set; }
		public Departments? Department { get; set; }   
		public ICollection<CurriculumSubjects> CurriculumSubjects { get; set; } = new List<CurriculumSubjects>();
		public ICollection<Prerequisites> Prerequisites { get; set; } = new List<Prerequisites>();
		public ICollection<CourseSections> CourseSections { get; set; } = new List<CourseSections>();
	}
}
