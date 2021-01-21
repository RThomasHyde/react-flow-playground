using System.ComponentModel.DataAnnotations;

public class AuthRequest
{
    [Required]
    public string Username { get; set; }

    [Required]
    public string Password { get; set; }
}