using BLL.Dto;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mapper
{
	public static class SpecializationMapper
	{
		public static Specializations ToSpecializationFromCreate(this CreateSpecializationRequestDto model)
		{
			return new Specializations
			{
				Name = model.Name,
				Description = model.Description,
				MajorId = model.MajorId
			};
		}
		public static Specializations ToSpecializationFromUpdate(this UpdateSpecializationRequestDto model)
		{
			return new Specializations
			{
				Id = model.Id,
				Name = model.Name,
				Description = model.Description,
				MajorId = model.MajorId
			};
		}
		public static Specializations ToSpecializationFromDelete(this DeleteSpecializationRequestDto model)
		{
			return new Specializations
			{
				Id = model.Id,
				Name = model.Name,
				Description = model.Description,
				MajorId = model.MajorId
			};
		}
	}
}
