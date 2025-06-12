using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Common
{
	public class CommonEntity
	{
		public Guid? Id { get; set; }
		public Status? Status { get; set; }
	}
}
