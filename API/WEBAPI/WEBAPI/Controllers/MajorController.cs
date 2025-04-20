using BLL.Dto;
using BLL.Mapper;
using BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers
{
	[ApiController]
	[Route("major")]
	public class MajorController :  ControllerBase
	{
		private readonly MajorService _majorService;

		public MajorController(MajorService majorService)
		{
			_majorService = majorService;
		}

		[HttpGet("get-all-major")]
		public async Task<IActionResult> GetAll()
		{
			return Ok(await _majorService.GetAsync(includeProperties : "Faculty"));
		}
		[HttpPost("add-major")]
		public async Task<IActionResult> Create([FromBody] RequestMajorCreateDto model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var newMajor = model.ToMajorFromCreate();
			await _majorService.AddAsync(newMajor);
			return Created();
		}
	}
}
