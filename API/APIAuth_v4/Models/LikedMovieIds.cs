namespace JWTTokenAPI.Models
{
  public class LikedMovieIds
  {
    public string Id { get; set; }
    public string MovieId { get; set; }

    public virtual ICollection<Ratings> Ratings { get; set; }
    public virtual ICollection<Favourites> Favourites { get; set; }
  }
}
