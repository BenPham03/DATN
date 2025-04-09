using BLL.Services.TokenService;
using DAL.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

public class TokenService : ITokenService
{
	private readonly IConfiguration _configuration;
	private readonly SymmetricSecurityKey _key;
	private readonly UserManager<AppUser> _userManager;

	public TokenService(IConfiguration configuration, UserManager<AppUser> userManager)
	{
		_configuration = configuration;
		_userManager = userManager;

		var secret = _configuration["Jwt:Secret"];
		if (string.IsNullOrEmpty(secret))
		{
			throw new InvalidOperationException("JWT Secret Key is missing in configuration.");
		}

		_key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secret));
	}

	public async Task<string> CreateToken(AppUser user)
	{
		var userRole = await _userManager.GetRolesAsync(user);
		var claims = new List<Claim>()
		{
			new Claim(JwtRegisteredClaimNames.Email, user.Email),
			new Claim(JwtRegisteredClaimNames.GivenName, user.UserName)
		};

		foreach (var role in userRole)
		{
			claims.Add(new Claim(ClaimTypes.Role, role));
		}

		var creds = new SigningCredentials(_key, SecurityAlgorithms.HmacSha256Signature);

		var tokenDescriptor = new SecurityTokenDescriptor
		{
			Subject = new ClaimsIdentity(claims),
			Expires = DateTime.UtcNow.AddDays(7),
			SigningCredentials = creds,
			Issuer = _configuration["Jwt:Issuer"],
			Audience = _configuration["Jwt:Audience"]
		};

		var tokenHandler = new JwtSecurityTokenHandler();
		var token = tokenHandler.CreateToken(tokenDescriptor);
		return tokenHandler.WriteToken(token);
	}
}
