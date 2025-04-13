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
	}
}
