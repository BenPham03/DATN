using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
	public class CourseSections
	{
		public Guid Id { get; set; }
		public Guid? SubjectId { get; set; }
		public Guid? LectureId { get; set; }
		public int Semester { get; set; }
		public string Year { get; set; }
		public Subjects? Subject { get; set; }
		public Lectures? Lecture { get; set; }
	}
}
