using System;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace DataBase.Models
{
    public class Movie
    {
        [Key]
        public int MovieID { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        [ForeignKey("Tag")]
        public int TagID { get; set; }
        [ForeignKey("Genre")]
        public int GenreID { get; set; }
        public string Picture { get; set; }
        [ForeignKey("Director")]
        public int DirectorID { get; set; }
        [ForeignKey("Country")]
        public int CountryID { get; set; }
    }
}
