﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
	public class PaginatedResult<T>
	{
		public int PageIndex { get; private set; }
		public int TotalPages { get; private set; }
		public int TotalCount { get; private set; }

		public List<T> Items { get; private set; }
		public PaginatedResult(List<T> items, int count, int pageIndex, int pageSize)
		{
			PageIndex = pageIndex;
			TotalPages = (int)Math.Ceiling(count / (double)pageSize);
			Items = items;
			TotalCount = count;
		}

		public bool HasPreviousPage => PageIndex > 1;

		public bool HasNextPage => PageIndex < TotalPages;

		public static async Task<PaginatedResult<T>> CreateAsync(IQueryable<T> query, int pageIndex, int pageSize)
		{
			var count = await query.CountAsync();
			var items = await query.Skip((pageIndex - 1) * pageSize)
								   .Take(pageSize)
								   .ToListAsync();

			return new PaginatedResult<T>(items, count, pageIndex, pageSize);
		}
	}
}
