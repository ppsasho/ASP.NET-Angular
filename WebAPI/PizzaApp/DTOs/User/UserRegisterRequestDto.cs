using System.ComponentModel.DataAnnotations;

namespace DTOs.User
{
    public class UserRegisterRequestDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Email { get; set; }

    }
}
