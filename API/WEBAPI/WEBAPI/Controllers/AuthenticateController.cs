using BLL.Dto;
using BLL.Services.TokenService;
using DAL.Helpers;
using DAL.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers
{
	[Route("authenticate")]
	[ApiController]
	public class AuthenticateController : ControllerBase
	{
		private readonly UserManager<AppUser> _userManager;
		private readonly RoleManager<IdentityRole<Guid>> _roleManager;
		private readonly IConfiguration _configuration;
		private readonly ITokenService _tokenService;
		public AuthenticateController(
			UserManager<AppUser> userManager,
			RoleManager<IdentityRole<Guid>> roleManager,
			IConfiguration configuration,
			ITokenService tokenService)
		{
			_configuration = configuration;
			_userManager = userManager;
			_roleManager = roleManager;
			_tokenService = tokenService;
		}
		[HttpPost]
		[Route("login")]
		public async Task<IActionResult> Login([FromBody] LoginDto login)
		{
			var user = await _userManager.FindByNameAsync(login.Username);
			if (user != null && await _userManager.CheckPasswordAsync(user, login.Password))
			{
				var authToken = await _tokenService.CreateToken(user);

				try
				{
					HttpContext.Response.Cookies.Append("AuthToken", authToken, new CookieOptions
					{
						HttpOnly = false,
						Secure = true,
						SameSite = SameSiteMode.Strict,
						Expires = DateTime.Now.AddDays(7)
					});
				}
				catch (Exception ex)
				{
					return StatusCode(StatusCodes.Status500InternalServerError, new { message = "Error while setting the cookie", details = ex.Message });
				}
				return Ok(new
				{
					token = authToken,
					expiration = DateTime.Now.AddDays(7)
				});
			}
			return Unauthorized();
		}

		[HttpPost]
		[Route("register-dean")]
		public async Task<IActionResult> RegisterDean([FromBody] RegisterDto model)
		{
			var userExists = await _userManager.FindByEmailAsync(model.Email);
			if (userExists != null)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists" });
			}
			AppUser user = new AppUser()
			{
				Email = model.Email,
				SecurityStamp = Guid.NewGuid().ToString(),
				UserName = model.UserName,
			};
			var result = await _userManager.CreateAsync(user, model.Password);
			if (!result.Succeeded)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });
			}
			if (!await _roleManager.RoleExistsAsync(Roles.Admin))
				await _roleManager.CreateAsync(new IdentityRole<Guid>(Roles.Admin));
			if (!await _roleManager.RoleExistsAsync(Roles.Dean))
				await _roleManager.CreateAsync(new IdentityRole<Guid>(Roles.Dean));
			if (!await _roleManager.RoleExistsAsync(Roles.Lecture))
				await _roleManager.CreateAsync(new IdentityRole<Guid>(Roles.Dean));
			if (await _roleManager.RoleExistsAsync(Roles.Dean))
			{
				await _userManager.AddToRoleAsync(user, Roles.Dean);
			}
			return Ok(new Response { Status = "Success", Message = "User created successfully!" });

		}
		[HttpPost]
		[Route("register-Lecture")]
		public async Task<IActionResult> RegisterLecture([FromBody] RegisterDto model)
		{
			var userExists = await _userManager.FindByEmailAsync(model.Email);
			if (userExists != null)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists" });
			}
			AppUser user = new AppUser()
			{
				Email = model.Email,
				SecurityStamp = Guid.NewGuid().ToString(),
				UserName = model.UserName,
			};
			var result = await _userManager.CreateAsync(user, model.Password);
			if (!result.Succeeded)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });
			}
			if (!await _roleManager.RoleExistsAsync(Roles.Admin))
				await _roleManager.CreateAsync(new IdentityRole<Guid>(Roles.Admin));
			if (!await _roleManager.RoleExistsAsync(Roles.Dean))
				await _roleManager.CreateAsync(new IdentityRole<Guid>(Roles.Dean));
			if (!await _roleManager.RoleExistsAsync(Roles.Lecture))
				await _roleManager.CreateAsync(new IdentityRole<Guid>(Roles.Lecture));
			if (await _roleManager.RoleExistsAsync(Roles.Lecture))
			{
				await _userManager.AddToRoleAsync(user, Roles.Lecture);
			}
			return Ok(new Response { Status = "Success", Message = "User created successfully!" });

		}
		[HttpPost]
		[Route("register-admin")]
		public async Task<IActionResult> RegisterAdmin([FromBody] RegisterDto model)
		{
			var userExists = await _userManager.FindByEmailAsync(model.Email);
			if (userExists != null)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists" });
			}
			AppUser user = new AppUser()
			{
				Email = model.Email,
				SecurityStamp = Guid.NewGuid().ToString(),
				UserName = model.UserName,
			};
			var result = await _userManager.CreateAsync(user, model.Password);
			if (!result.Succeeded)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });
			}
			if (!await _roleManager.RoleExistsAsync(Roles.Admin))
				await _roleManager.CreateAsync(new IdentityRole<Guid>(Roles.Admin));
			if (!await _roleManager.RoleExistsAsync(Roles.Dean))
				await _roleManager.CreateAsync(new IdentityRole<Guid>(Roles.Dean));
			if (!await _roleManager.RoleExistsAsync(Roles.Lecture))
				await _roleManager.CreateAsync(new IdentityRole<Guid>(Roles.Dean));
			if (await _roleManager.RoleExistsAsync(Roles.Admin))
			{
				await _userManager.AddToRoleAsync(user, Roles.Admin);
			}
			return Ok(new Response { Status = "Success", Message = "User created successfully!" });

		}
		[HttpPost]
		[Route("change-password")]
		public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordDto model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(new Response { Status = "Error", Message = "Invalid request data." });
			}

			var user = await _userManager.FindByNameAsync(model.Username);
			if (user == null)
			{
				return NotFound(new Response { Status = "Error", Message = "User not found." });
			}

			var result = await _userManager.ChangePasswordAsync(user, model.CurrentPassword, model.NewPassword);
			if (!result.Succeeded)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, new Response
				{
					Status = "Error",
					Message = string.Join("; ", result.Errors.Select(e => e.Description))
				});
			}

			return Ok(new Response { Status = "Success", Message = "Password changed successfully." });
		}
		[HttpPost]
		[Route("assign-role")]
		public async Task<IActionResult> AssignRole([FromBody] AssignRoleDto model)
		{
			var user = await _userManager.FindByNameAsync(model.Username);
			if (user == null)
			{
				return NotFound(new Response { Status = "Error", Message = "User not found." });
			}

			if (!await _roleManager.RoleExistsAsync(model.Role))
			{
				await _roleManager.CreateAsync(new IdentityRole<Guid>(model.Role));
			}

			if (await _userManager.IsInRoleAsync(user, model.Role))
			{
				return BadRequest(new Response { Status = "Error", Message = "User already has this role." });
			}

			var result = await _userManager.AddToRoleAsync(user, model.Role);
			if (!result.Succeeded)
			{
				return StatusCode(StatusCodes.Status500InternalServerError, new Response
				{
					Status = "Error",
					Message = "Failed to assign role."
				});
			}

			return Ok(new Response { Status = "Success", Message = $"Role '{model.Role}' assigned to user '{model.Username}'." });
		}
		[HttpGet]
		[Route("all-users")]
		//[Authorize(Roles = "Admin")]
		public async Task<IActionResult> GetAllUsers()
		{
			var users = _userManager.Users.ToList();
			var userList = new List<object>();

			foreach (var user in users)
			{
				var roles = await _userManager.GetRolesAsync(user);
				userList.Add(new
				{
					id = user.Id,
					username = user.UserName,
					email = user.Email,
					password = user.PasswordHash,
					roles = roles
				});
			}

			return Ok(userList);
		}
		[HttpPost]
		[Route("reset-password")]
		public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDto model)
		{
			var user = await _userManager.FindByNameAsync(model.UserName);
			if (user == null)
				return NotFound(new Response { Status = "Error", Message = "User not found" });

			// Tạo mã token đặt lại mật khẩu
			var token = await _userManager.GeneratePasswordResetTokenAsync(user);

			// Đặt lại mật khẩu
			var resetPassResult = await _userManager.ResetPasswordAsync(user, token, model.NewPassword);

			if (!resetPassResult.Succeeded)
			{
				var errors = resetPassResult.Errors.Select(e => e.Description);
				return StatusCode(StatusCodes.Status500InternalServerError,
					new Response { Status = "Error", Message = "Reset password failed: " + string.Join("; ", errors) });
			}
			await _userManager.UpdateAsync(user);

			return Ok(new Response { Status = "Success", Message = "Password has been reset successfully" });
		}
	}
}
