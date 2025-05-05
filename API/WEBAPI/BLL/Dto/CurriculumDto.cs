using DAL.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Dto
{
	public class CurriculumCreateDto
	{
		[Required(ErrorMessage = "Curriculum name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Name { get; set; }
		[Required(ErrorMessage = "AcademicYear cannot null")]
		[MaxLength(9, ErrorMessage = "Max length is 9")]
		public string AcademicYear { get; set; }
		[Required(ErrorMessage = "Major Id cannot null")]
		public Guid? MajorId { get; set; }
	}
	public class CurriculumUpdateDto
	{
		[Required(ErrorMessage = "Curriculum id cannot null")]
		public Guid Id { get; set; }
		[Required(ErrorMessage = "Curriculum name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Name { get; set; }
		[Required(ErrorMessage = "AcademicYear cannot null")]
		[MaxLength(9, ErrorMessage = "Max length is 9")]
		public string AcademicYear { get; set; }
		[Required(ErrorMessage = "Major Id cannot null")]
		public Guid? MajorId { get; set; }
	}
	public class CurriculumDeleteDto
	{
		[Required(ErrorMessage = "Curriculum id cannot null")]
		public Guid Id { get; set; }
		[Required(ErrorMessage = "Curriculum name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Name { get; set; }
		[Required(ErrorMessage = "AcademicYear cannot null")]
		[MaxLength(9, ErrorMessage = "Max length is 9")]
		public string AcademicYear { get; set; }
		[Required(ErrorMessage = "Major Id cannot null")]
		public Guid? MajorId { get; set; }
	}
}
