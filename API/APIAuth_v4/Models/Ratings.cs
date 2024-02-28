namespace JWTTokenAPI.Models
{
  public class Ratings
  {
    public string Id { get; set; }
    public string UserId { get; set; }
    public string MovieId { get; set; }
    public int Rating { get; set; }
  }
}
