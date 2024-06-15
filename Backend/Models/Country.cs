using System;
using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Country
    {
        [Key]
        public int CountryID { get; set; }
        public string Name { get; set; }
    }
}
