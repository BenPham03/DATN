using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DAL.Models
{
	public class Prerequisites
	{
		public Guid SubjectId { get; set; }
		public Guid PrerequisiteSubjectId { get; set; }
		public Subjects? Subject { get; set; }
		public Subjects? PrerequisiteSubject { get; set; }
	}
}
