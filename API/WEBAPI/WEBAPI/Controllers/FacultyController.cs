using BLL.Dto;
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
		private readonly DepartmentService _departmentService;
		private readonly MajorService _majorService;

		public FacultyController(FacultyService facultyService, DepartmentService departmentService, MajorService majorService)
		{
			_facultyService = facultyService;
			_departmentService = departmentService;
			_majorService = majorService;
		}
		[HttpPost("get-faculty")]
		public async Task<IActionResult> Get([FromBody] CommonDto status)
		{
			if (status.Status.Count == 0)
			{
				return Ok(await _facultyService.GetAsync());
			}
			return Ok(await _facultyService.GetAsync(pageSize: int.MaxValue, orderBy: c => c.OrderBy(s => s.Name), filter: (e => status.Status.Contains(e.Status))));
		}
		[HttpPost("createFaculty")]
		public async Task<IActionResult> Create(CreateFacultyRequestDto dto)
		{
			var newFaculty = dto.ToFacultyFromCreate();
			await _facultyService.AddAsync(newFaculty);
			return Created();
		}
		[HttpPut("updateFaculty")]
		public async Task<IActionResult> Update(UpdateFaculties dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var updateFaculty = dto.ToFacultyFromUpdate();
			await _facultyService.UpdateAsync(updateFaculty);
			return NoContent();
		}
		[HttpDelete("deleteFaculty")]
		public async Task<IActionResult> Delete(DeleteFaculties dto)
		{
			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}
			var departments = await _departmentService.GetAsync(filter: d => d.FacultyId == dto.Id);
			var majors = await _majorService.GetAsync(filter: m => m.FacultyId == dto.Id);
			if (departments.Items.Count() > 0)
			{
				return BadRequest("Cannot delete faculty with existing departments. Please delete the departments first.");
			}
			if (majors.Items.Count() > 0)
			{
				return BadRequest("Cannot delete faculty with existing majors. Please delete the majors first.");
			}
			var deleteFaculty = dto.ToFacultyFromDelete();
			await _facultyService.DeleteAsync(deleteFaculty);
			return NoContent();
		}
	}
}
