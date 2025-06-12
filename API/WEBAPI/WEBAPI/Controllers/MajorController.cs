using BLL.Dto;
using BLL.Mapper;
using BLL.Services;
using DAL.Models;
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

		[HttpPost("get-all-major")]
		public async Task<IActionResult> GetAll([FromBody] CommonDto? status)
		{
			if(status.Status.Count == 0)
			{
				return Ok(await _majorService.GetAsync(includeProperties: "Faculty", pageSize: int.MaxValue, orderBy: c => c.OrderBy(s => s.Name)));
			}
			return Ok(await _majorService.GetAsync(includeProperties: "Faculty", pageSize: int.MaxValue, orderBy: c => c.OrderBy(s => s.Name), filter: (e => status.Status.Contains(e.Status))));

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
		[HttpPut("update-major")]
		public async Task<IActionResult> Update([FromBody] RequestMajorUpdateDto model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var major = model.ToMajorFromUpdate();
			await _majorService.UpdateAsync(major);
			return NoContent();
		}
		[HttpDelete("delete-major")]
		public async Task<IActionResult> Delete([FromBody] RequestMajorDeleteDto model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var major = model.ToMajorFromDelete();
			await _majorService.DeleteAsync(major);
			return NoContent();
		}
	}
}
