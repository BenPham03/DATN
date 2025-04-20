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
				FacultyId = model.FacultyId,
			};
		}
	}
}
