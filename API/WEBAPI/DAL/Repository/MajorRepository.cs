using DAL.Data;
using DAL.Interfaces;
using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repository
{
	public class MajorRepository : GenericRepository<Majors>, IMajorRepository
	{
		public MajorRepository(AppDbContext context) : base(context)
		{
		}
	}
}
