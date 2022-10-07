using System.Collections.Generic;

namespace Blog.Models
{
    public class PagedInfo<T> where T : class
    {
        public List<T> Data { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }
    }
}
