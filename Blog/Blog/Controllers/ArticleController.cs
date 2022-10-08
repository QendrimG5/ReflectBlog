using Blog.Data;
using Blog.Entities;
using Blog.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Controllers
{
    [ApiController]
    [Produces("application/json", "application/problem+json")]
    [Authorize]
    [Route("[controller]")]
    public class ArticleController : ControllerBase
    {
        private readonly BlogDbContext _dbContext;

        public ArticleController(BlogDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetArticles")]
        public async Task<IActionResult> GetArticles(int page = 1, int pageSize = 10)
        {
            var articlesPaged = new PagedInfo<Article>
            {
                Data = await _dbContext.Articles.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync(),
                TotalCount = await _dbContext.Articles.CountAsync(),
                PageSize = pageSize
            };

            return Ok(articlesPaged);
        }

        [HttpGet("GetArticle")]
        public async Task<IActionResult> GetArticle([Required]int id)
        {
            var article = await _dbContext.Articles.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(article);
        }

         [HttpGet("SearchArticle")]
        public async Task<IEnumerable<Article>> Search(string searchText)
        {
            IQueryable<Article> query = _dbContext.Articles;

            if (!string.IsNullOrEmpty(searchText))
            {
                query = query.Where(e => e.Title.Contains(searchText)
                            || e.Content.Contains(searchText) );
            }
            return await query.ToListAsync();
        }

        [HttpPost("PostArticle")]
        public async Task<IActionResult> PostArticle(Article articleModel)
        {
            var articleToAdd = await _dbContext.AddAsync(articleModel);
            await _dbContext.SaveChangesAsync();

            return Ok(articleToAdd.Entity);
        }

        [HttpPut("UpdateArticle")]
        public async Task<IActionResult> UpdateArticle(Article articleModel)
        {
            var articleToUpdate = _dbContext.Update(articleModel);
            await _dbContext.SaveChangesAsync();

            return Ok(articleToUpdate.Entity);
        }

        [HttpDelete("DeleteArticle")]
        public async Task<IActionResult> DeleteArticle([Required]int id)
        {
            var articleToDelete = await _dbContext.Articles.FirstOrDefaultAsync(x => x.Id == id);
            _dbContext.Remove(articleToDelete);
            await _dbContext.SaveChangesAsync();

            return Ok("Deleted Article!");
        }
    }
}