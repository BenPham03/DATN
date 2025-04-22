using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Dto
{
	public class MajorDto
	{
	}
	public class RequestMajorCreateDto
	{
		[Required(ErrorMessage = "Major name cannot null")]
		public string Name { get; set; }
		[Required(ErrorMessage = "Major description cannot null")]
		public string Description { get; set; }
		[Required(ErrorMessage = "Major faculty cannot null")]
		public Guid? FacultyId { get; set; }
	}
	public class RequestMajorUpdateDto
	{
		[Required(ErrorMessage = "Major Id cannot null")]
		public Guid Id { get; set; }
		[Required(ErrorMessage = "Major name cannot null")]
		public string Name { get; set; }
		[Required(ErrorMessage = "Major description cannot null")]
		public string Description { get; set; }
		[Required(ErrorMessage = "Major faculty cannot null")]
		public Guid? FacultyId { get; set; }
	}
	public class RequestMajorDeleteDto
	{
		[Required(ErrorMessage = "Major Id cannot null")]
		public Guid Id { get; set; }
		[Required(ErrorMessage = "Major name cannot null")]
		public string Name { get; set; }
		[Required(ErrorMessage = "Major description cannot null")]
		public string Description { get; set; }
		[Required(ErrorMessage = "Major faculty cannot null")]
		public Guid? FacultyId { get; set; }
	}
}
