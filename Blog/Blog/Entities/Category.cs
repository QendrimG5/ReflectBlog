using System.Collections.Generic;

namespace Blog.Entities
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDefault { get; set; }

        public ICollection<Article> Articles { get; set; }
    }
}
