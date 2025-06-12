using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Dto.Faculty
{
	public class CreateFacultyRequestDto
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public Status Status { get; set; }
	}
	public class UpdateFaculties
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public Status Status { get; set; }
	}
	public class DeleteFaculties
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public Status Status { get; set; }
	}
}
