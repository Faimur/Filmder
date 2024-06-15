using System;
using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Director
    {
        [Key]
        public int DirectorID { get; set; }
        public string Name { get; set; }
    }
}
