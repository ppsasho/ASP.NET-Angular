namespace Shared.Exceptions.User
{
    public class UserNotFoundException : Exception
    {
        public UserNotFoundException(string message)
            :base(message)
        {

        }
    }
}
