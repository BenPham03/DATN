using DAL.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Dto
{
	public class SpecializationDto
	{
	}
	public class CreateSpecializationRequestDto
	{
		[Required(ErrorMessage = "Specialization Name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Name { get; set; }
		[Required(ErrorMessage = "Specialization Description cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Description { get; set; }
		[Required(ErrorMessage = "Specialization MajorId cannot null")]
		public Guid? MajorId { get; set; }
	}
	public class UpdateSpecializationRequestDto
	{
		[Required(ErrorMessage = "Specialization Id cannot null")]
		public Guid Id { get; set; }
		[Required(ErrorMessage = "Specialization Name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Name { get; set; }
		[Required(ErrorMessage = "Specialization Description cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Description { get; set; }
		[Required(ErrorMessage = "Specialization MajorId cannot null")]
		public Guid? MajorId { get; set; }
	}
	public class DeleteSpecializationRequestDto
	{
		[Required(ErrorMessage = "Specialization Id cannot null")]
		public Guid Id { get; set; }
		[Required(ErrorMessage = "Specialization Name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Name { get; set; }
		[Required(ErrorMessage = "Specialization Description cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Description { get; set; }
		[Required(ErrorMessage = "Specialization MajorId cannot null")]
		public Guid? MajorId { get; set; }
	}
}
