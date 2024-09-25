using DTOs.User;
using Shared.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Interfaces
{
    internal interface IUserService
    {
        Task<CustomResponse<UserRegisterResponseDto>> RegisterUserAsync(UserRegisterRequestDto request);
        Task<CustomResponse<UserLoginRequestDto>> LoginUserAsync(UserLoginRequestDto request);
        Task<CustomResponse> GetAllUsersAsync();
        Task<CustomResponse<UserDto>> GetUserById(string id);
        Task<CustomResponse> UpdateUserAsync(UserUpdateRequestDto request);
        Task<CustomResponse> DeleteUserAsync(string id);



    }
}
