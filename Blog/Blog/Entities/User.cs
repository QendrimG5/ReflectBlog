using System.ComponentModel.DataAnnotations;

namespace Blog.Entities;

public class User
{
    public int Id { get; set; }

    [Required]
    public string FirstName { get; set; }
    [Required]
    public string LastName { get; set; }
    public DateTime Birthday { get; set; }
    [Required]
    public bool Admin { get; set; }
}