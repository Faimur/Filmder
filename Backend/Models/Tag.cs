using System;
using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Tag
    {
        public int TagID { get; set; }
        public string Name { get; set; }
        public ICollection<Movie> Movies { get; set; }
    }
}
