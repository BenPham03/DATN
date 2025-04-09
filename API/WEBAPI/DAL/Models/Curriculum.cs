using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DAL.Models
{
	public class Curriculum
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string AcademicYear { get; set; }
		public Guid? MajorId { get; set; }
		public Majors? Major { get; set; }
		public ICollection<CurriculumSubjects> CurriculumSubjects { get; set; } = new List<CurriculumSubjects>();
	}
}
