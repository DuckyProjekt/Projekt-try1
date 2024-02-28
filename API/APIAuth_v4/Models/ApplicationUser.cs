using Microsoft.AspNetCore.Identity;

namespace JWTTokenAPI.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

    }
}
