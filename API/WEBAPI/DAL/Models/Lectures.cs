using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
	public enum Position
	{
		Dean,
		Lecture
	}
	public class Lectures
	{
		public Guid Id { get; set; }
		public string FullName { get; set; }
		public string Email { get; set; }
		public string PhoneNumber { get; set; }
		public Position Position { get; set; }
		public Guid? DepartmentId { get; set; }
		public Departments? Department { get; set; }
		public AppUser? User { get; set; }
		public ICollection<CourseSections> CourseSections { get; set; } = new List<CourseSections>();
	}
}
