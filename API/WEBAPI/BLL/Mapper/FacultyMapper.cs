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
		public static Faculties ToFacultyFromUpdate(this UpdateFaculties faculties)
		{
			return new Faculties
			{
				Id = faculties.Id,
				Name = faculties.Name,
				Description = faculties.Description,
				Status = faculties.Status
			};
		}
		public static Faculties ToFacultyFromDelete(this DeleteFaculties faculties)
		{
			return new Faculties
			{
				Id = faculties.Id,
				Name = faculties.Name,
				Description = faculties.Description,
				Status = faculties.Status
			};
		}
	}
}
