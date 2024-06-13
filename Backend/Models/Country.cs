using System;
using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Country
    {
        public int CountryID { get; set; }
        public string Name { get; set; }
        public ICollection<Movie> Movies { get; set; }
    }
}
