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
    public class CategoryController : ControllerBase
    {
        private readonly BlogDbContext _dbContext;

        public CategoryController(BlogDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetCategories")]
        public async Task<IActionResult> GetCategories(int page = 1, int pageSize = 10)
        {
            var categoriesPaged = new PagedInfo<Category>
            {
                Data = await _dbContext.Categories.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync(),
                TotalCount = await _dbContext.Categories.CountAsync(),
                PageSize = pageSize
            };

            return Ok(categoriesPaged);
        }

        [HttpGet("GetCategory")]
        public async Task<IActionResult> GetCategory([Required]int id)
        {
            var Category = await _dbContext.Categories.FirstOrDefaultAsync(x => x.Id == id);

            var Categories = await _dbContext.Categories.Skip(0).Take(10).ToListAsync();

            return Ok(Category);
        }

        [HttpPost("PostCategory")]
        public async Task<IActionResult> PostCategory(Category CategoryModel)
        {
            var CategoryToAdd = await _dbContext.AddAsync(CategoryModel);
            await _dbContext.SaveChangesAsync();

            return Ok(CategoryToAdd.Entity);
        }

        [HttpPut("UpdateCategory")]
        public async Task<IActionResult> UpdateCategory(Category CategoryModel)
        {
            var CategoryToUpdate = _dbContext.Update(CategoryModel);
            await _dbContext.SaveChangesAsync();

            return Ok(CategoryToUpdate.Entity);
        }

        [HttpDelete("DeleteCategory")]
        public async Task<IActionResult> DeleteCategory([Required]int id)
        {
            var CategoryToDelete = await _dbContext.Categories.FirstOrDefaultAsync(x => x.Id == id);
            _dbContext.Remove(CategoryToDelete);
            await _dbContext.SaveChangesAsync();

            return Ok("Deleted Category!");
        }
    }
}