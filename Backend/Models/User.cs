using System;
using System.ComponentModel.DataAnnotations;

namespace DataBase.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string Logins { get; set; }
        public string Passwords { get; set; }
        public ICollection<Liked> LikedMovies { get; set; }
    }
}
