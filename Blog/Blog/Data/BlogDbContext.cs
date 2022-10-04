using Blog.Entities;
using Microsoft.EntityFrameworkCore;

namespace Blog.Data
{
    public class BlogDbContext : DbContext
    {
        public BlogDbContext(DbContextOptions<BlogDbContext> options)
            : base(options) { }

        public DbSet<Article> Articles => Set<Article>();
        public DbSet<User> Users => Set<User>();
    }
}
