using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Dto
{
	public class RegisterDto
	{
		[Required(ErrorMessage = "User Name is required")]
		public string? UserName { get; set; }

		[EmailAddress]
		[Required(ErrorMessage = "Email is required")]
		public string?  Email { get; set; }

		[Required(ErrorMessage = "Password is required")]
		public string? Password { get; set; }
	}
	public class ChangePasswordDto
	{
		public string Username { get; set; } = string.Empty;
		public string CurrentPassword { get; set; } = string.Empty;
		public string NewPassword { get; set; } = string.Empty;
	}
	public class AssignRoleDto
	{
		public string Username { get; set; } = string.Empty;
		public string Role { get; set; } = string.Empty;
	}
	public class ResetPasswordDto
	{
		public string UserName { get; set; } = string.Empty;
		public string NewPassword { get; set; } = string.Empty;
	}
}
