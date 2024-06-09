using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace DataBase.Models
{
    public class User
    {
        public int UserID { get; set; }
        public string Logins { get; set; }
        public string Passwords { get; set; }
        public ICollection<Liked> LikedMovies { get; set; }
        public ICollection<Friend> Friends { get; set; }
        public ICollection<Friendship> Friendships { get; set; }
    }
}
