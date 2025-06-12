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
		public decimal TheoryCredits { get; set; }
		public decimal PracticeCredits { get; set; }
		public DateTime CreateAt { get; set; }= DateTime.Now;
		public string? UpdateAt { get; set; }
		public Guid? DepartmentId { get; set; }
		public Status Status { get; set; }
		public Departments? Department { get; set; }
		public ICollection<CurriculumSubjects> CurriculumSubjects { get; set; } = new List<CurriculumSubjects>();
		public ICollection<Prerequisites> Prerequisites { get; set; } = new List<Prerequisites>();
		public ICollection<CourseSections> CourseSections { get; set; } = new List<CourseSections>();
	}
}
