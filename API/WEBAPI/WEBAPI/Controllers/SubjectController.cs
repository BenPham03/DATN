using BLL.Dto;
using BLL.Mapper;
using BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers
{
	[ApiController]
	[Route("subject")]
	public class SubjectController : ControllerBase
	{
		private readonly SubjectService _subjectService;

		public SubjectController(SubjectService subjectService)
		{
			_subjectService = subjectService;
		}
		[HttpPost("get-all")]
		public async Task<IActionResult> GetAll([FromBody] CommonDto common)
		{
			if (common.Status.Count == 0)
			{
				return Ok(await _subjectService.GetAsync(includeProperties: "Department", pageSize: int.MaxValue, orderBy: c => c.OrderBy(s => s.SubjectName), filter: e => common.Status.Contains(e.Status)));
			}
			return Ok(await _subjectService.GetAsync(includeProperties : "Department", pageSize: int.MaxValue, orderBy: c => c.OrderBy(s => s.SubjectName), filter: e => common.Status.Contains(e.Status)));
		}
		[HttpPost("add-subject")]
		public async Task<IActionResult> Create(CreateSubjectDto dto)
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var model = dto.ToSubjectFromCreateDto();
			var result = await _subjectService.AddAsync(model);
			return Created();
		}
		[HttpPut("update-subject")]
		public async Task<IActionResult> Update(UpdateSubjectDto dto)
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var model = dto.ToSubjectFromUpdateDto();
			var result = await _subjectService.UpdateAsync(model);
			return NoContent();
		}
		[HttpDelete("delete-subject")]
		public async Task<IActionResult> Delete(DeleteSubjectDto dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var model = dto.ToSubjectFromDeleteDto();
			var result = await _subjectService.DeleteAsync(model);
			return NoContent();
		}
	}
}
