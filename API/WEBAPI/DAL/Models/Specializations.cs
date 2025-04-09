using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DAL.Models
{
	public class Specializations
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public Guid? MajorId { get; set; }
		public Majors? Major { get; set; }
		public ICollection<Subjects> Subjects { get; set; } = new List<Subjects>();
	}
}
