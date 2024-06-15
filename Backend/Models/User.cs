using System;
using System.ComponentModel.DataAnnotations;

namespace DataBase.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
