using BLL.Dto;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mapper
{
	public static class MajorMapper
	{
		public static Majors ToMajorFromCreate(this RequestMajorCreateDto model)
		{
			return new Majors
			{
				Name = model.Name,
				Description = model.Description,
				MajorCode = model.MajorCode,
				FacultyId = model.FacultyId,
			};
		}
		public static Majors ToMajorFromUpdate(this RequestMajorUpdateDto model)
		{
			return new Majors
			{
				Id = model.Id,
				Name = model.Name,
				Description = model.Description,
				MajorCode = model.MajorCode,
				FacultyId = model.FacultyId,
				Status = model.Status
			};
		}
		public static Majors ToMajorFromDelete(this RequestMajorDeleteDto model)
		{
			return new Majors
			{
				Id = model.Id,
				Name = model.Name,
				Description = model.Description,
				MajorCode = model.MajorCode,
				FacultyId = model.FacultyId,
				Status = model.Status
			};
		}
	}
}
