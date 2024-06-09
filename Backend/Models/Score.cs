using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
namespace DataBase.Models
{
    public class Score
    {
        public int ScoreID { get; set; }
        public int FriendshipID { get; set; }
        public Friendship Friendship { get; set; }
        public int MovieID { get; set; }
        public Movie Movie { get; set; }
        public int Value { get; set; }
    }
}
