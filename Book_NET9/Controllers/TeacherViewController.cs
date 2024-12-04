using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Book_NET9.Models;
using Book_NET9.ViewModels;

namespace Book_NET9.Controllers
{
    public class TeacherViewController : Controller
    {
        private ApplicationContext _context;

        public TeacherViewController(ApplicationContext context)
        {
            _context = context;
        }
        public IActionResult IndexTeacher()
        {
            var studentsWithResults =  _context.Students
               .Include(s => s.Results)
               .ToList();

            return View(studentsWithResults);
        }
    }
}
