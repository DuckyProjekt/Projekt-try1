namespace JWTTokenAPI.Models
{
  public class Ratings
  {
    public string Id { get; set; }
    public string UserId { get; set; }
    public string MovieId { get; set; }
    public int Rating { get; set; }

    public virtual ApplicationUser ApplicationUser { get; set; }
    public virtual LikedMovieIds LikedMovieId { get; set; }
  }
}
