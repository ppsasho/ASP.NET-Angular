using Domain_Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Data_Access
{
    public class PizzaAppDbContext : IdentityDbContext<User>
    {
        public PizzaAppDbContext(DbContextOptions options)
            :base(options){}

        //public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
    }
}
