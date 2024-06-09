using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
