using BLL.Dto;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mapper
{
	public static class DepartmentMapper
	{
		public static Departments ToDepartmentFromCreateDto(this CreateDepartmentRequestDto dto)
		{
			return new Departments
			{
				Name = dto.Name,
				Description = dto.Description,
				FacultyId = dto.FacultyId,
			};
		}
		public static Departments ToDepartmentFromUpdateDto(this UpdateDepartmentRequestDto dto)
		{
			return new Departments
			{
				Id = dto.Id,
				Name = dto.Name,
				Description = dto.Description,
				FacultyId = dto.FacultyId,
			};
		}
		public static Departments ToDepartmentFromDeleteDto(this DeleteDepartmentRequestDto dto)
		{
			return new Departments
			{
				Id = dto.Id,
				Name = dto.Name,
				Description = dto.Description,
				FacultyId = dto.FacultyId,
			};
		}
	}
}
