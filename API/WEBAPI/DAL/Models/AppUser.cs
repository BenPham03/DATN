﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Models
{
	public class AppUser : IdentityUser<Guid>
	{
		public Guid? LectureId { get; set; }
		public Lectures? Lecture { get; set; }
	}
}
