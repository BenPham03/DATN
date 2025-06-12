using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DAL.Models
{
	public enum OutputStandard
	{
		Bachelor,
		Master,
		Doctoral
	}
	public enum Status
	{
		Active,
		Inactive
	}
	public class Curriculum
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string AcademicYear { get; set; }
		public DateTime CreateAt { get; set; } = DateTime.Now;
		public string? UpdateAt { get; set; }
		public OutputStandard OutputStandard { get; set; }
		public Status Status { get; set; } = Status.Active;
		public Guid? SpecializationId { get; set; }
		public Specializations? Specialization { get; set; }
		public ICollection<CurriculumSubjects> CurriculumSubjects { get; set; } = new List<CurriculumSubjects>();
	}
}
