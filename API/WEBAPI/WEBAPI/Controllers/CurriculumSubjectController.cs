using BLL.Dto;
using BLL.Mapper;
using BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers
{
	[ApiController]
	[Route("curriculumsubject")]
	public class CurriculumSubjectController : ControllerBase
	{
		private readonly CurriculumSubjectService _curriculumSubjectService;

		public CurriculumSubjectController(CurriculumSubjectService curriculumSubjectService)
		{
			_curriculumSubjectService = curriculumSubjectService;
		}
		[HttpGet("get-all/{id?}")]
		public async Task<IActionResult> GetAll([FromRoute] Guid? id)
		{
			if(id == null) 
				return Ok(await _curriculumSubjectService.GetAsync(includeProperties: "Subject,Curriculum", orderBy: c =>c.OrderBy(c => c.Semester), pageSize: Int32.MaxValue));
			else
				return Ok(await _curriculumSubjectService.GetAsync(includeProperties: "Subject,Curriculum", orderBy: c => c.OrderBy(c => c.Semester), pageSize: Int32.MaxValue, filter: c  => c.CurriculumId == id));
		}
		[HttpPost("add-curriculum-subject")]
		public async Task<IActionResult> Create(CurriculumSubjectCreateDto dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var entity = dto.ToCurriculumSubjectFromCreate();
			var result = await _curriculumSubjectService.AddAsync(entity);
			return Created("", result);
		}
		[HttpPut("update-curriculum-subject")]
		public async Task<IActionResult> Update(CurriculumSubjectUpdateDto dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var entity = dto.ToCurriculumSubjectFromUpdate();
			var result = await _curriculumSubjectService.UpdateAsync(entity);
			return NoContent();
		}
		[HttpDelete("delete-curriculum-subject")]
		public async Task<IActionResult> Delete(CurriculumSubjectDeleteDto dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var entity = dto.ToCurriculumSubjectFromDelete();
			var result = await _curriculumSubjectService.DeleteAsync(entity);
			return NoContent();
		}
	}
}
