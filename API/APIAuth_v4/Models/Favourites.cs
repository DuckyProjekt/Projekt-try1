namespace JWTTokenAPI.Models
{
  public class Favourites
  {
    public string Id { get; set; }
    public string UserId { get; set; }
    public string MovieId { get; set; }
    public virtual ApplicationUser User { get; set; }
    public virtual LikedMovieIds LikedMovieId { get; set; }
  }
}
