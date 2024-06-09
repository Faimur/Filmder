using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Friendship
    {
        public int FriendshipID { get; set; }
        public int UserID { get; set; }
        public User User { get; set; }
        public int FriendID { get; set; }
        public User Friend { get; set; }
        public ICollection<Score> Scores { get; set; }
    }
}
