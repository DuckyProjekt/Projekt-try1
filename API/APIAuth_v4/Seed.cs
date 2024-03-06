namespace WebApiCoreWithEF
{
  using System.Linq;
  using JWTTokenAPI.Data;
  using JWTTokenAPI.Models;

  public static class InitialData
  {
    public static void Seed(this JWTTokenAPIContext dbContext)
    {
      if (!dbContext.Users.Any())
      {
        dbContext.Users.Add(new ApplicationUser
        {
          FirstName = "András",
          LastName = "Bercsek",
          UserName = "Andris",
          Email = "bercsekandras@ktch.hu"
        });
      }
    }
  }
}
