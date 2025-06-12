using BLL.Dto;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mapper
{
	public static class CurriculumMapper
	{
		public static Curriculum ToCurriculumFromCreate(this CurriculumCreateDto dto)
		{
			return new Curriculum
			{
				Name = dto.Name,
				AcademicYear = dto.AcademicYear,
				SpecializationId = dto.SpecializationId,
				OutputStandard = dto.OutputStandard
			};
		}
		public static Curriculum ToCurriculumFromUpdate(this CurriculumUpdateDto dto)
		{
			return new Curriculum
			{
				Id = dto.Id,
				Name = dto.Name,
				AcademicYear = dto.AcademicYear,
				SpecializationId = dto.SpecializationId,
				Status = dto.Status,
				OutputStandard = dto.OutputStandard
			};
		}
		public static Curriculum ToCurriculumFromDelete(this CurriculumDeleteDto dto)
		{
			return new Curriculum
			{
				Id = dto.Id,
				Name = dto.Name,
				AcademicYear = dto.AcademicYear,
				SpecializationId = dto.SpecializationId,
				Status = dto.Status,
				OutputStandard = dto.OutputStandard
			};
		}
	}
}
