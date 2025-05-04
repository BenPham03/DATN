using BLL.Dto;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mapper
{
	public static class SubjectMapper
	{
		public static Subjects ToSubjectFromCreateDto(this CreateSubjectDto dto)
		{
			return new Subjects
			{
				SubjectName = dto.SubjectName,
				SubjectCode = dto.SubjectCode,
				TheoryCredits = dto.TheoryCredits,
				PracticeCredits = dto.PracticeCredits,
				SpecializationId = dto.SpecializationId,
				DepartmentId = dto.DepartmentId
			};
		}
		public static Subjects ToSubjectFromUpdateDto(this UpdateSubjectDto dto)
		{
			return new Subjects
			{
				Id = dto.Id,
				SubjectName = dto.SubjectName,
				SubjectCode = dto.SubjectCode,
				TheoryCredits = dto.TheoryCredits,
				PracticeCredits = dto.PracticeCredits,
				SpecializationId = dto.SpecializationId,
				DepartmentId = dto.DepartmentId
			};
		}
		public static Subjects ToSubjectFromDeleteDto(this DeleteSubjectDto dto)
		{
			return new Subjects
			{
				Id = dto.Id,
				SubjectName = dto.SubjectName,
				SubjectCode = dto.SubjectCode,
				TheoryCredits = dto.TheoryCredits,
				PracticeCredits = dto.PracticeCredits,
				SpecializationId = dto.SpecializationId,
				DepartmentId = dto.DepartmentId
			};
		}
	}
}
