using System.ComponentModel.DataAnnotations;

namespace Blog.Entities
{
    public class Article
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }
        [Required]
        public string Content { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;
        [Required]
        public string Author { get; set; }
    }
}
