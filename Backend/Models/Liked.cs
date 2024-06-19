using System.ComponentModel.DataAnnotations.Schema;
namespace DataBase.Models
{
    public class Liked
    {
        [ForeignKey("User")]
        public int UserID { get; set; }
        [ForeignKey("Movie")]
        public int MovieID { get; set; }
    }
}
