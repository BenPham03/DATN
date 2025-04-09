using DAL.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Data
{
	public class AppDbContext : IdentityDbContext<AppUser, IdentityRole<Guid>, Guid>
	{
		public DbSet<Lectures> Lectures { get; set; }
		public DbSet<Faculties> Faculties { get; set; }
		public DbSet<Departments> Departments { get; set; }
		public DbSet<Majors> Majors { get; set; }
		public DbSet<Curriculum> Curriculum { get; set; }
		public DbSet<Specializations> Specializations { get; set; }
		public DbSet<CourseSections> CourseSections { get; set; }
		public DbSet<CurriculumSubjects> CurriculumSubjects { get; set; }
		public DbSet<Prerequisites> Prerequisites { get; set; }
		public DbSet<Subjects> Subjects { get; set; }
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
		{

		}
		protected override void OnModelCreating(ModelBuilder builder)
		{
			base.OnModelCreating(builder);

			// ------------------- AppUser Configuration --------------------

			//AppUser -> Lectures
			builder.Entity<AppUser>()
				.HasOne(a => a.Lecture)
				.WithOne(l => l.User)
				.HasForeignKey<AppUser>(a => a.LectureId)
				.OnDelete(DeleteBehavior.SetNull); //Set UserId null when delete AppUser

			// ------------------- Faculty Configuration --------------------

			//Faculties -> Departments
			builder.Entity<Faculties>()
				.HasMany(f => f.Departments)
				.WithOne(d => d.Faculty)
				.HasForeignKey(d => d.FacultyId)
				.OnDelete(DeleteBehavior.SetNull); //Set FacultyId in Department table null when delete Faculties

			//Faculties -> Majors
			builder.Entity<Faculties>()
				.HasMany(f => f.Majors)
				.WithOne(m => m.Faculty)
				.HasForeignKey(f => f.FacultyId)
				.OnDelete(DeleteBehavior.SetNull); //Set FacultyId in Majors table null when delete Faculties

			// ------------------- Department Configuration -----------------

			//Departments -> Lectures
			builder.Entity<Departments>()
				.HasMany(d => d.Lectures)
				.WithOne(l => l.Department)
				.HasForeignKey(l => l.DepartmentId)
				.OnDelete(DeleteBehavior.SetNull); //Set DepartmentId in Department table null when delete Departments

			// ------------------- Lectures Configuration -------------------

			//Lectures -> CourseSections
			builder.Entity<Lectures>()
				.HasMany(l => l.CourseSections)
				.WithOne(c => c.Lecture)
				.HasForeignKey(c => c.LectureId)
				.OnDelete(DeleteBehavior.SetNull); //Set LectureId in CourseSections table null when delete Lectures

			// ------------------- Majors Configuration ---------------------

			//Majors -> Specicalizations
			builder.Entity<Majors>()
				.HasMany(m => m.Specializations)
				.WithOne(s => s.Major)
				.HasForeignKey(s => s.MajorId)
				.OnDelete(DeleteBehavior.SetNull); //Set MajorId in Specializations table null when delete Majors

			// ------------------- Specializations Configuration -------------

			//Specializations -> Subjects
			builder.Entity<Specializations>()
				.HasMany(sp => sp.Subjects)
				.WithOne(s => s.Specialization)
				.HasForeignKey(s => s.SpecializationId)
				.OnDelete(DeleteBehavior.SetNull);  //Set SpecializationId in Subjects table null when delete Specialization

			// -------------------- Subjects Configuration --------------------

			//Subjects -> CourseSections
			builder.Entity<Subjects>()
				.HasMany(s => s.CourseSections)
				.WithOne(cs => cs.Subject)
				.HasForeignKey(cs => cs.SubjectId)
				.OnDelete(DeleteBehavior.SetNull);

			// Prerequisites (Restrict Delete to avoid loop)
			builder.Entity<Prerequisites>()
				.HasKey(p => new { p.SubjectId, p.PrerequisiteSubjectId });
			builder.Entity<Prerequisites>()
				.HasOne(p => p.Subject)
				.WithMany(s => s.Prerequisites)
				.HasForeignKey(p => p.SubjectId)
				.OnDelete(DeleteBehavior.Restrict);

			builder.Entity<Prerequisites>()
				.HasOne(p => p.PrerequisiteSubject)
				.WithMany()
				.HasForeignKey(p => p.PrerequisiteSubjectId)
				.OnDelete(DeleteBehavior.Restrict);

			//--------------------- CurriculumSubjects Configuration ----------

			builder.Entity<CurriculumSubjects>()
				.HasKey(cs => new { cs.SubjectId, cs.CurriculumId });

			builder.Entity<CurriculumSubjects>()
				.HasOne(cs => cs.Curriculum)
				.WithMany(c => c.CurriculumSubjects)
				.HasForeignKey(cs => cs.CurriculumId)
				.OnDelete(DeleteBehavior.Restrict); 

			builder.Entity<CurriculumSubjects>()
				.HasOne(cs => cs.Subject)
				.WithMany(s => s.CurriculumSubjects)
				.HasForeignKey(cs => cs.SubjectId)
				.OnDelete(DeleteBehavior.Cascade); 

			//--------------------- Enum Configuration ------------------------

			builder.Entity<Lectures>()
				.Property(l => l.Position)
				.HasConversion<string>();
		}
	}
}
