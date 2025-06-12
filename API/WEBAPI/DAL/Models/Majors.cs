using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DAL.Models
{
	public class Majors
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public string MajorCode { get; set; }
		public DateTime CreateAt { get; set; } = DateTime.Now;
		public string? UpdateAt { get; set; }
		public Status Status { get; set; }
		public Guid? FacultyId { get; set; }
		public Faculties? Faculty { get; set; }
		public ICollection<Specializations> Specializations { get; set; } = new List<Specializations>();
	}
}
