using System;
using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Tag
    {
        [Key]
        public int TagID { get; set; }
        public string Name { get; set; }
    }
}
