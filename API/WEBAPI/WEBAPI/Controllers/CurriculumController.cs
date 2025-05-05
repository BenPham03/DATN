using BLL.Dto;
using BLL.Mapper;
using BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers
{
	[ApiController]
	[Route("curriculum")]
	public class CurriculumController : ControllerBase
	{
		private readonly CurriculumService _curriculumService;

		public CurriculumController(CurriculumService curriculumService)
		{
			_curriculumService = curriculumService;
		}
		[HttpGet("get-all")]
		public async Task<IActionResult> GetAll()
		{
			return Ok(await _curriculumService.GetAsync(includeProperties: "Major"));
		}
		[HttpPost("add-curriculum")]
		public async Task<IActionResult> Create(CurriculumCreateDto dto)
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var entity = dto.ToCurriculumFromCreate();
			var result = await _curriculumService.AddAsync(entity);
			return Created();
		}
		[HttpPut("update-curriculum")]
		public async Task<IActionResult> Update(CurriculumUpdateDto dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var entity = dto.ToCurriculumFromUpdate();
			var result = await _curriculumService.UpdateAsync(entity);
			return NoContent();
		}
		[HttpPut("delete-curriculum")]
		public async Task<IActionResult> Delete(CurriculumDeleteDto dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var entity = dto.ToCurriculumFromDelete();
			var result = await _curriculumService.DeleteAsync(entity);
			return NoContent();
		}
	}
}
