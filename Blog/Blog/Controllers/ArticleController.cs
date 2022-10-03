using Blog.Data;
using Blog.Entities;
using Blog.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Blog.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ArticleController : ControllerBase
    {
        private readonly BlogDbContext _dbContext;

        public ArticleController(BlogDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet(Name = "GetArticle")]
        public async Task<IActionResult> GetArticle([Required]int id)
        {
            var article = await _dbContext.Articles.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(article);
        }

        [HttpPost(Name = "PostArticle")]
        public async Task<IActionResult> PostArticle(Article articleModel)
        {
            var articleToAdd = await _dbContext.AddAsync(articleModel);
            await _dbContext.SaveChangesAsync();

            return Ok(articleToAdd.Entity);
        }

        [HttpPut(Name = "UpdateArticle")]
        public async Task<IActionResult> UpdateArticle(Article articleModel)
        {
            var articleToUpdate = _dbContext.Update(articleModel);
            await _dbContext.SaveChangesAsync();

            return Ok(articleToUpdate.Entity);
        }

        [HttpDelete(Name = "DeleteArticle")]
        public async Task<IActionResult> DeleteArticle([Required]int id)
        {
            var articleToDelete = await _dbContext.Articles.FirstOrDefaultAsync(x => x.Id == id);
            _dbContext.Remove(articleToDelete);
            await _dbContext.SaveChangesAsync();

            return Ok("Deleted Article!");
        }
    }
}