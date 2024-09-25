namespace DTOs.User
{
    public class UserLoginResponseDto
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public DateTime ValidTo { get; set; }
    }
}
