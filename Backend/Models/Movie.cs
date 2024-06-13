using System;

using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Movie
    {
        public int MovieID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int TagID { get; set; }
        public Tag Tag { get; set; }
        public int GenreID { get; set; }
        public Genre Genre { get; set; }
        public string Picture { get; set; }
        public int DirectorID { get; set; }
        public Director Director { get; set; }
        public int CountryID { get; set; }
        public Country Country { get; set; }
        public ICollection<Liked> LikedMovies { get; set; }
    }
}
