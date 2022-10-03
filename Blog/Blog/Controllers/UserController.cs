using System.ComponentModel.DataAnnotations;
using Blog.Data;
using Blog.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Blog.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly BlogDbContext _dbContext;

        public UserController(BlogDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet(Name = "GetUsers")]
        public async Task<IActionResult> GetUser([Required]int id)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(user);
        }

        [HttpPost(Name = "PostUser")]
        public async Task<IActionResult> PostUser(User userModel)
        {
            var userToAdd = await _dbContext.AddAsync(userModel);
            await _dbContext.SaveChangesAsync();

            return Ok(userToAdd.Entity);
        }

        [HttpPut(Name = "UpdateUser")]
        public async Task<IActionResult> UpdateUser(User userModel)
        {
            var userToUpdate = _dbContext.Update(userModel);
            await _dbContext.SaveChangesAsync();

            return Ok(userToUpdate.Entity);
        }

        [HttpDelete(Name = "DeleteUser")]
        public async Task<IActionResult> DeleteUser([Required]int id)
        {
            var userToDelete = await _dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            _dbContext.Remove(userToDelete);
            await _dbContext.SaveChangesAsync();

            return Ok("Deleted User");
        }
        
    }
}