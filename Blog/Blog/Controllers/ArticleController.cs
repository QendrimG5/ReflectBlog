using Blog.Data;
using Blog.Entities;
using Blog.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.Linq.Expressions;
using Blog.Helpers;

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



        [HttpGet("GetArticle")]
        public async Task<IActionResult> GetArticle([Required]int id)
        {
            var article = await _dbContext.Articles.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(article);
        }


        // This method to be called if image was already uploaded using UploadImage Endpoint
        [HttpPost("PostArticle")]
        public async Task<IActionResult> PostArticle(Article articleModel)
        {
            var articleToAdd = await _dbContext.AddAsync(articleModel);
            await _dbContext.SaveChangesAsync();

            return Ok(articleToAdd.Entity);
        }

        // This method to be called if you want to create article and upload image in the same time
        [HttpPost("PostArticleV1")]
        public async Task<IActionResult> PostArticleV1([FromForm]ArticleModel articleModel)
        {
            var article = new Article
            {
                Title = articleModel.Title,
                Content = articleModel.Content,
                Date = articleModel.Date,
                AuthorId = articleModel.AuthorId,
                CategoryId = articleModel.CategoryId
            };

            article.ImageUrl = await UploadImageToCdn(articleModel.Image);

            var articleToAdd = await _dbContext.AddAsync(articleModel);
            await _dbContext.SaveChangesAsync();

            return Ok(articleToAdd.Entity);
        }

        ///Endpoint to upload picture
        [AllowAnonymous]
        [HttpPost("UploadImage")]
        //[NonAction]
        public async Task<IActionResult> UploadImage(IFormFile image)
        {
            var extension = Path.GetExtension(image.FileName);

            if (extension != ".png")
            {
                return BadRequest("Only png files are accepted.");
            }

            string base64Image;
            using (var ms = new MemoryStream())
            {
                image.CopyTo(ms);
                var fileBytes = ms.ToArray();
                base64Image = Convert.ToBase64String(fileBytes);
                // act on the Base64 data
            }

            var httpclient = new HttpClient();
            httpclient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Client-ID", "c88b8634c974be4");
            httpclient.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "text/plain");
            var response = await httpclient.PostAsync("https://api.imgur.com/3/image", new StringContent(base64Image));
            var stringcontent = await response.Content.ReadAsStringAsync();
            var imgurResponseModel = JsonConvert.DeserializeObject<ImgurResponseModel>(stringcontent);

            //return ImgurResponseModel.Data.Link;
            return Ok(imgurResponseModel.Data.Link);
        }

        // method to upload picture if V1 of post was used
        [NonAction]
        public async Task<string> UploadImageToCdn(IFormFile image)
        {
            var extension = Path.GetExtension(image.FileName);

            if (extension != ".png")
            {
                return null;
            }

            string base64Image;
            using (var ms = new MemoryStream())
            {
                image.CopyTo(ms);
                var fileBytes = ms.ToArray();
                base64Image = Convert.ToBase64String(fileBytes);
                // act on the Base64 data
            }

            var httpclient = new HttpClient();
            httpclient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Client-ID", "a65e2cd7035148f");
            httpclient.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "text/plain");
            var response = await httpclient.PostAsync("https://api.imgur.com/3/image", new StringContent(base64Image));
            var stringcontent = await response.Content.ReadAsStringAsync();
            var imgurResponseModel = JsonConvert.DeserializeObject<ImgurResponseModel>(stringcontent);

            //return ImgurResponseModel.Data.Link;
            return imgurResponseModel.Data.Link;
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