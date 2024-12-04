using System.ComponentModel.DataAnnotations;

namespace Book_NET9.Models
{
    public class Teacher
    {
        public int Id { get; set; }

        public string Lastname { get; set; }

        public string Firstname { get; set; }

        public string Patronymic { get; set; }
        [RegularExpression(@"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}")]
        public string Email { get; set; }
        
        public string Phone { get; set; }

        public string Password { get; set; }

        public string PasswordConfirm { get; set; }

    }
}
