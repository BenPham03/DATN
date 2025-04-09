﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace DAL.Models
{
	public class Departments
	{
		public Guid Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public Guid? FacultyId { get; set; }
		public Faculties? Faculty { get; set; }
		public ICollection<Lectures> Lectures { get; set; } = new List<Lectures>();
	}
}
