using DAL.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Dto
{
	public class CreateDepartmentRequestDto
	{
		[Required(ErrorMessage = "Department name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Name { get; set; }
		[Required(ErrorMessage = "Department description cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Description { get; set; }
		[Required(ErrorMessage = "Faculty id cannot null")]
		public Guid? FacultyId { get; set; }
	}
	public class UpdateDepartmentRequestDto
	{
		[Required(ErrorMessage = "Department id cannot null")]
		public Guid Id { get; set; }
		[Required(ErrorMessage = "Department name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Name { get; set; }
		[Required(ErrorMessage = "Department description cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Description { get; set; }
		[Required(ErrorMessage = "Faculty id cannot null")]
		public Guid? FacultyId { get; set; }
		public Status Status { get; set; }
	}
	public class DeleteDepartmentRequestDto
	{
		[Required(ErrorMessage = "Department id cannot null")]
		public Guid Id { get; set; }
		[Required(ErrorMessage = "Department name cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Name { get; set; }
		[Required(ErrorMessage = "Department description cannot null")]
		[MaxLength(255, ErrorMessage = "Max length is 255")]
		public string Description { get; set; }
		[Required(ErrorMessage = "Faculty id cannot null")]
		public Guid? FacultyId { get; set; }
		public Status Status { get; set; }
	}
}
