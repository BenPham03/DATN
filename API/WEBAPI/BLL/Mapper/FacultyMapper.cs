using BLL.Dto.Faculty;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mapper
{
	public static class FacultyMapper
	{
		public static Faculties ToFacultyFromCreate(this CreateFacultyRequestDto faculties)
		{
			return new Faculties
			{
				Name = faculties.Name,
				Description = faculties.Description,
			};
		}
	}
}
