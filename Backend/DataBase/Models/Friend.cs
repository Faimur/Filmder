using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Friend
    {
        public int FriendID { get; set; }
        public int UserID { get; set; }
        public User User { get; set; }
        public ICollection<Score> Scores { get; set; }
    }
}
