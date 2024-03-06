using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using JWTTokenAPI.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace JWTTokenAPI.Data
{
    public class JWTTokenAPIContext : IdentityDbContext<ApplicationUser>
    {
        public JWTTokenAPIContext (DbContextOptions<JWTTokenAPIContext> options)
            : base(options)
        {
        }
        public DbSet<JWTTokenAPI.Models.LikedMovieIds>? LikedMovieIds { get; set; }
        public DbSet<JWTTokenAPI.Models.Favourites>? Favourites { get; set; }
        public DbSet<JWTTokenAPI.Models.Ratings>? Ratings { get; set; }

        //public DbSet<JWTTokenAPI.Models.Company> Company { get; set; } = default!;
    }
}
