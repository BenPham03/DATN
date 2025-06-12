using BLL.Dto;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Mapper
{
	public static class CurriculumSubjectMapper
	{
		public static CurriculumSubjects ToCurriculumSubjectFromCreate(this CurriculumSubjectCreateDto dto)
		{
			return new CurriculumSubjects
			{
				CurriculumId = dto.CurriculumId,
				SubjectId = dto.SubjectId,
				Semester = dto.Semester
			};
		}
		public static CurriculumSubjects ToCurriculumSubjectFromUpdate(this CurriculumSubjectUpdateDto dto)
		{
			return new CurriculumSubjects
			{
				CurriculumId = dto.CurriculumId,
				SubjectId = dto.SubjectId,
				Semester = dto.Semester
			};
		}
		public static CurriculumSubjects ToCurriculumSubjectFromDelete(this CurriculumSubjectDeleteDto dto)
		{
			return new CurriculumSubjects
			{
				CurriculumId = dto.CurriculumId,
				SubjectId = dto.SubjectId,
				Semester = dto.Semester
			};
		}
	}
}
