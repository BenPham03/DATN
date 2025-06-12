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
		private readonly CurriculumSubjectService _curriculumSubjectService;

		public CurriculumController(CurriculumService curriculumService, CurriculumSubjectService curriculumSubjectService)
		{
			_curriculumService = curriculumService;
			_curriculumSubjectService = curriculumSubjectService;
		}
		[HttpGet("get-all")]
		public async Task<IActionResult> GetAll()
		{
			return Ok(await _curriculumService.GetAsync(includeProperties: "Specialization", pageSize: int.MaxValue, orderBy: c => c.OrderBy(s => s.Name)));
		}
		[HttpPost("add-curriculum")]
		public async Task<IActionResult> Create(CurriculumCreateDto dto)
		{
			if (!ModelState.IsValid)
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
		[HttpDelete("delete-curriculum")]
		public async Task<IActionResult> Delete(CurriculumDeleteDto dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var curriculumSubjects = await _curriculumSubjectService.GetAsync(filter: e => e.SubjectId == dto.Id);
			if (curriculumSubjects.Items.Count() > 0)
			{
				return BadRequest("Cannot delete subject with existing curriculum subjects. Please delete the curriculum subjects first.");
			}
			var entity = dto.ToCurriculumFromDelete();
			var result = await _curriculumService.DeleteAsync(entity);
			return NoContent();
		}
		[HttpGet("get-detail/{id}")]
		public async Task<IActionResult> GetDetail([FromRoute] Guid id)
		{
			if (id == Guid.Empty)
			{
				return BadRequest("Invalid curriculum ID.");
			}
			var resutl = await _curriculumService.GetCurriculumDetails(id);
			return Ok(resutl);
		}
	}
}
