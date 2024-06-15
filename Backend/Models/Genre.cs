using System;
using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Genre
    {
        [Key]
        public int GenreID { get; set; }
        public string Name { get; set; }
    }
}
