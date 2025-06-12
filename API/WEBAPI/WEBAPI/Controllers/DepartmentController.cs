using BLL.Dto;
using BLL.Mapper;
using BLL.Services;
using Microsoft.AspNetCore.Mvc;

namespace WEBAPI.Controllers
{
	[ApiController]
	[Route("department")]
	public class DepartmentController : ControllerBase
	{
		private readonly DepartmentService _departmentService;

		public DepartmentController(DepartmentService departmentService)
		{
			_departmentService = departmentService;
		}
		[HttpPost("get-all")]
		public async Task<IActionResult> GetAll([FromBody] CommonDto status)
		{
			if(status.Status.Count == 0)
			{
				return Ok(await _departmentService.GetAsync(includeProperties: "Faculty", pageSize: int.MaxValue, orderBy: c => c.OrderBy(s => s.Name)));
			}
			return Ok(await _departmentService.GetAsync(includeProperties: "Faculty", pageSize: int.MaxValue, orderBy: c => c.OrderBy(s => s.Name), filter: (e => status.Status.Contains(e.Status))));
		}
		[HttpPost("create")]
		public async Task<IActionResult> Create([FromBody] CreateDepartmentRequestDto model)
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var newDepartment = model.ToDepartmentFromCreateDto();
			var result = await _departmentService.AddAsync(newDepartment);
			return Created();
		}
		[HttpPut("update")]
		public async Task<IActionResult> Update([FromBody] UpdateDepartmentRequestDto model)
		{
			if(!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var updateDepartment = model.ToDepartmentFromUpdateDto();
			var result = await _departmentService.UpdateAsync(updateDepartment);
			return NoContent();
		}
		[HttpDelete("delete")]
		public async Task<IActionResult> Delete([FromBody] DeleteDepartmentRequestDto model)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var updateDepartment = model.ToDepartmentFromDeleteDto();
			var result = await _departmentService.DeleteAsync(updateDepartment);
			return NoContent();
		}
	}
}
