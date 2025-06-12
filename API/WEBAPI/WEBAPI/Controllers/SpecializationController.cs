using BLL.Dto;
using BLL.Mapper;
using BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers
{
	[ApiController]
	[Route("specialization")]
	public class SpecializationController : ControllerBase
	{
		private readonly SpecializationService _specializationService;

		public SpecializationController(SpecializationService specializationService)
		{
			_specializationService = specializationService;
		}
		[HttpPost("getallspecialization")]
		public async Task<IActionResult> GetAll([FromBody] CommonDto status)
		{
			if (status.Status.Count == 0)
			{
				return Ok(await _specializationService.GetAsync(includeProperties: "Major", pageSize: int.MaxValue, orderBy: c => c.OrderBy(s => s.Name)));
			}
			return Ok(await _specializationService.GetAsync(includeProperties: "Major", pageSize: int.MaxValue, orderBy: c => c.OrderBy(s => s.Name), filter: e => status.Status.Contains(e.Status)));
		}
		[HttpPost("add-specialization")]
		public async Task<IActionResult> Create([FromBody] CreateSpecializationRequestDto dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var entity = dto.ToSpecializationFromCreate();
			var result = await _specializationService.AddAsync(entity);
			return Created();
		}
		[HttpPut("update-specialization")]
		public async Task<IActionResult> Update([FromBody] UpdateSpecializationRequestDto dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var entity = dto.ToSpecializationFromUpdate();
			var result = await _specializationService.UpdateAsync(entity);
			return NoContent();
		}
		[HttpDelete("delete-specialization")]
		public async Task<IActionResult> Delete([FromBody] DeleteSpecializationRequestDto dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var entity = dto.ToSpecializationFromDelete();
			var result = await _specializationService.DeleteAsync(entity);
			return NoContent();
		}
	}
}
