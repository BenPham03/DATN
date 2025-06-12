namespace BLL.Dto
{
	public class CurriculumSubjectCreateDto
	{
		public Guid? CurriculumId { get; set; }
		public Guid? SubjectId { get; set; }
		public int Semester { get; set; }
	}
	public class CurriculumSubjectUpdateDto
	{
		public Guid? CurriculumId { get; set; }
		public Guid? SubjectId { get; set; }
		public int Semester { get; set; }
	}
	public class CurriculumSubjectDeleteDto
	{
		public Guid? CurriculumId { get; set; }
		public Guid? SubjectId { get; set; }
		public int Semester { get; set; }
	}
	public class CurriculumSubjectDto
	{
		public Guid? CurriculumId { get; set; }
		public Guid? SubjectId { get; set; }
		public int Semester { get; set; }
		public string? CurriculumName { get; set; }
		public string? SubjectName { get; set; }
		public int Order { get; set; }
		public bool IsActive { get; set; } = true;
	}
}
