using DAL.Models;
using System.ComponentModel.DataAnnotations;

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
		[Required(ErrorMessage = "Specialization Id cannot null")]
		public Guid? SpecializationId { get; set; }
		[Required(ErrorMessage = "Specialization Id cannot null")]
		public OutputStandard OutputStandard { get; set; }
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
		[Required(ErrorMessage = "Specialization Id cannot null")]
		public Guid? SpecializationId { get; set; }
		public Status Status { get; set; }
		[Required(ErrorMessage = "Specialization Id cannot null")]
		public OutputStandard OutputStandard { get; set; }
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
		[Required(ErrorMessage = "Specialization Id cannot null")]
		public Guid? SpecializationId { get; set; }
		public Status Status { get; set; }
		[Required(ErrorMessage = "Specialization Id cannot null")]
		public OutputStandard OutputStandard { get; set; }
	}
	public class CurriculumDto
	{
		public Guid Id { get; set; }
		public int Semester { get; set; }
		public string SubjectCode { get; set; }
		public string SubjectName { get; set; }
		public decimal Credits { get; set; }
	}
}
