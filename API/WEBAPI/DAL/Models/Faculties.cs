using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DAL.Models
{
	public class Faculties
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public ICollection<Departments> Departments { get; set; }
		public ICollection<Majors> Majors { get; set; }
	}
}
