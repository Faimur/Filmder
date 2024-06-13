using System;
using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Genre
    {
        public int GenreID { get; set; }
        public string Name { get; set; }
        public ICollection<Movie> Movies { get; set; }
    }
}
