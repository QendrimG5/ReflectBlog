using Blog.Data;
using Blog.Entities;
using Blog.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace Blog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserController : ControllerBase
    {
        private readonly BlogDbContext _dbContext;

        public UserController(BlogDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetUsers")]
        public async Task<IActionResult> GetUsers(int page = 1, int pageSize = 10)
        {
            var UsersPaged = new PagedInfo<User>
            {
                Data = await _dbContext.Users.Skip((page - 1) * pageSize).Take(pageSize).ToListAsync(),
                TotalCount = await _dbContext.Users.CountAsync(),
                PageSize = pageSize
            };

            return Ok(UsersPaged);
        }

        [HttpGet("GetUser")]
        public async Task<IActionResult> GetUser([Required] int id)
        {
            var User = await _dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);

            var Users = await _dbContext.Users.Skip(0).Take(10).ToListAsync();

            return Ok(User);
        }

        [HttpPost("PostUser")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> PostUser(User UserModel)
        {
            UserModel.Salt = Guid.NewGuid().ToString();
            UserModel.Password = CreateMD5( UserModel.Salt + UserModel.Password);
            var userToAdd = await _dbContext.AddAsync(UserModel);
            await _dbContext.SaveChangesAsync();

            return Ok(userToAdd.Entity);
        }

        [HttpPut("UpdateUser")]
        public async Task<IActionResult> UpdateUser(User UserModel)
        {
            var userToUpdate = _dbContext.Update(UserModel);
            await _dbContext.SaveChangesAsync();

            return Ok(userToUpdate.Entity);
        }

        [HttpDelete("DeleteUser")]
        public async Task<IActionResult> DeleteUser([Required] int id)
        {
            var userToDelete = await _dbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            _dbContext.Remove(userToDelete);
            await _dbContext.SaveChangesAsync();

            return Ok("Deleted User!");
        }

        [HttpGet("Admins")]
        [Authorize(Roles = "Administrator")]
        public IActionResult AdminsEndpoint()
        {
            var currentUser = GetCurrentUser();

            return Ok($"Hi {currentUser.GivenName}, you are an {currentUser.Role}");
        }


        [HttpGet("Editors")]
        [Authorize(Roles = "Editor")]
        public IActionResult EditorsEndpoint()
        {
            var currentUser = GetCurrentUser();

            return Ok($"Hi {currentUser.GivenName}, you are a {currentUser.Role}");
        }

        [HttpGet("AdminsAndEditors")]
        [Authorize(Roles = "Administrator,Editor")]
        public IActionResult AdminsAndEditorsEndpoint()
        {
            var currentUser = GetCurrentUser();

            return Ok($"Hi {currentUser.GivenName}, you are an {currentUser.Role}");
        }

        private User GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;

            if (identity != null)
            {
                var userClaims = identity.Claims;

                return new User
                {
                    Username = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value,
                    Email = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value,
                    GivenName = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.GivenName)?.Value,
                    FamilyName = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Surname)?.Value,
                    Role = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value
                };
            }
            return null;
        }

        [NonAction]
        public string CreateMD5(string input)
        {
            using (MD5 md5 = MD5.Create())
            {
                byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
                byte[] hashBytes = md5.ComputeHash(inputBytes);

                return Convert.ToHexString(hashBytes);
            }
        }
    }
}
