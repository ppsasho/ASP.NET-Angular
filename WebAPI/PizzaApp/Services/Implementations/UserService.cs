using AutoMapper;
using Domain_Models;
using DTOs.User;
using Microsoft.AspNetCore.Identity;
using Services.Interfaces;
using Shared.Exceptions.User;
using Shared.Responses;

namespace Services.Implementations
{
    public class UserService : IUserService
    {
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;
        public UserService(IMapper mapper, UserManager<User> manager)
        {
            _mapper = mapper;
            _userManager = manager;
        }
        public Task<CustomResponse> DeleteUserAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task<CustomResponse> GetAllUsersAsync()
        {
            throw new NotImplementedException();
        }

        public Task<CustomResponse<UserDto>> GetUserById(string id)
        {
            throw new NotImplementedException();
        }

        public Task<CustomResponse<UserLoginRequestDto>> LoginUserAsync(UserLoginRequestDto request)
        {
            throw new NotImplementedException();
        }

        public Task<CustomResponse<UserRegisterResponseDto>> RegisterUserAsync(UserRegisterRequestDto request)
        {

        }

        public Task<CustomResponse> UpdateUserAsync(UserUpdateRequestDto request)
        {
            throw new NotImplementedException();
        }
    }
}
