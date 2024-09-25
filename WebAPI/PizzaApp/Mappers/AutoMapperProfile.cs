using AutoMapper;
using Domain_Models;
using DTOs.User;

namespace Mappers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<User, UserLoginRequestDto>();

        }
    }
}
