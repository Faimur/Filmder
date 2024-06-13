using System;
using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Liked
    {
        public int UserID { get; set; }
        public User User { get; set; }
        public int MovieID { get; set; }
        public Movie Movie { get; set; }
    }
}
