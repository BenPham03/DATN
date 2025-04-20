using BLL.Dto.Faculty;
using BLL.Mapper;
using BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers
{
	[ApiController]
	[Route("faculty")]
	public class FacultyController : ControllerBase
	{
		private readonly FacultyService _facultyService;
		public FacultyController(FacultyService facultyService)
		{
			_facultyService = facultyService;
		}
		[HttpGet("get-faculty")]
		public async Task<IActionResult> Get()
		{
			return Ok(await _facultyService.GetAsync());
		}
		[HttpPost("createFaculty")]
		public async Task<IActionResult> Create(CreateFacultyRequestDto dto)
		{
			var newFaculty = dto.ToFacultyFromCreate();
			await _facultyService.AddAsync(newFaculty);
			return Created();
		}

	}
}
