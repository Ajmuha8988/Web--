using Book_NET9.Models;

namespace Book_NET9.ViewModels
{
    public class StudentScoreViewModel
    {
        public IEnumerable<Student> students { get; set; }
        public IEnumerable<Result> results { get; set; }
    }
}
