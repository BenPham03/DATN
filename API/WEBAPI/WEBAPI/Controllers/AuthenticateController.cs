using BLL.Dto;
using BLL.Services.TokenService;
using DAL.Helpers;
using DAL.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers
{
	[Route("api/authenticate")]
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
						Expires =  DateTime.Now.AddDays(7)
					});
				}
				catch (Exception ex)
				{
					return StatusCode(StatusCodes.Status500InternalServerError, new { message = "Error while setting the cookie", details = ex.Message });
				}
				return Ok(new
				{
					token = authToken,
					expiration =  DateTime.Now.AddDays(7)
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
			if(!result.Succeeded)
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
				await _roleManager.CreateAsync(new IdentityRole<Guid>(Roles.Dean));
			if (await _roleManager.RoleExistsAsync(Roles.Lecture))
			{
				await _userManager.AddToRoleAsync(user, Roles.Lecture);
			}
			return Ok(new Response { Status = "Success", Message = "User created successfully!" });

		}
	}
}
