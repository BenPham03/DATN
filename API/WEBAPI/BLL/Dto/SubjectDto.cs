using DAL.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Dto
{
	public class CreateSubjectDto
	{
		[Required(ErrorMessage = "Subject Name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string SubjectName { get; set; }
		[Required(ErrorMessage = "Subject code cannot null")]
		[MaxLength(8, ErrorMessage = "Max length is 255")]
		public string SubjectCode { get; set; }
		[Required(ErrorMessage = "Theory Credits cannot null")]
		[Range(0,30, ErrorMessage = "Theory credits must be in range from 1 to 30")]
		public decimal TheoryCredits { get; set; }
		[Required(ErrorMessage = "Practice Credits cannot null")]
		[Range(0, 30, ErrorMessage = "Practice credits must be in range from 1 to 30")]
		public decimal PracticeCredits { get; set; }
		[Required(ErrorMessage = "Department Id cannot null")]
		public Guid? DepartmentId { get; set; }
	}
	public class UpdateSubjectDto
	{
		[Required(ErrorMessage = "Subject id cannot null")]
		public Guid Id { get; set; }
		[Required(ErrorMessage = "Subject Name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string SubjectName { get; set; }
		[Required(ErrorMessage = "Subject code cannot null")]
		[MaxLength(8, ErrorMessage = "Max length is 255")]
		public string SubjectCode { get; set; }
		[Required(ErrorMessage = "Theory Credits cannot null")]
		[Range(0, 30, ErrorMessage = "Theory credits must be in range from 1 to 30")]
		public decimal TheoryCredits { get; set; }
		[Required(ErrorMessage = "Practice Credits cannot null")]
		[Range(0, 30, ErrorMessage = "Practice credits must be in range from 1 to 30")]
		public decimal PracticeCredits { get; set; }
		[Required(ErrorMessage = "Specialization Id cannot null")]
		public Guid? DepartmentId { get; set; }
		public Status Status { get; set; }
	}
	public class DeleteSubjectDto
	{
		[Required(ErrorMessage = "Subject id cannot null")]
		public Guid Id { get; set; }
		[Required(ErrorMessage = "Subject Name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string SubjectName { get; set; }
		[Required(ErrorMessage = "Subject code cannot null")]
		[MaxLength(8, ErrorMessage = "Max length is 255")]
		public string SubjectCode { get; set; }
		[Required(ErrorMessage = "Theory Credits cannot null")]
		[Range(0, 30, ErrorMessage = "Theory credits must be in range from 1 to 30")]
		public decimal TheoryCredits { get; set; }
		[Required(ErrorMessage = "Practice Credits cannot null")]
		[Range(0, 30, ErrorMessage = "Practice credits must be in range from 1 to 30")]
		public decimal PracticeCredits { get; set; }
		[Required(ErrorMessage = "Specialization Id cannot null")]
		public Guid? DepartmentId { get; set; }
		public Status Status { get; set; }
	}
}
