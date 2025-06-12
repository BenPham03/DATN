using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
	public class CurriculumSubjects
	{
		public Guid? CurriculumId { get; set; }
		public Guid? SubjectId { get; set; }
		public int Semester { get; set; }
		public Curriculum? Curriculum { get; set; }
		public Subjects? Subject { get; set; }
	}
}
