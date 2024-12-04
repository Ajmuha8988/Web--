using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Security.Claims;
using Book_NET9.Models;
using Book_NET9.ViewModels;

namespace Book_NET9.Controllers
{
   public class HomeController : Controller
    {
        private ApplicationContext db;
        public HomeController(ApplicationContext context)
        {
            db = context;
        }
        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }
        public async Task<IActionResult> PartialView()
        {
            return View();
        }
        public async Task<IActionResult> Index()
        {
            return View("Index");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Registration(RegistrationViewModel modelview)
        {
          if (modelview.students != null)
          {
                    db.Students.Add(modelview.students);
                    db.SaveChanges();
                    TempData["ID_Student"] = modelview.students.Id;
                    return View("~/Views/StudentView/IndexStudent.cshtml");
          }
          if (modelview.teachers != null)
          {
                
                db.Teachers.Add(modelview.teachers);
                db.SaveChanges();
                return RedirectToAction("IndexTeacher", "TeacherView");
            }
          return View("Index");
        
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> LoginStudent(RegistrationViewModel modelview)
        {
                // Проверяем наличие студента по email
                var student = await db.Students.SingleOrDefaultAsync(s => s.Email == modelview.students.Email && s.Password == modelview.students.Password);
                if (student != null)
                {
                    TempData["ID_Student"] = student.Id;
                    return RedirectToAction("IndexStudent", "StudentView");
                }
                return View("PartialView");
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> LoginTeacher(RegistrationViewModel modelview)
        {
            var teacher = await db.Teachers.FirstOrDefaultAsync(s => s.Email == modelview.teachers.Email && s.Password == modelview.teachers.Password);
            if (teacher != null)
            {
                return RedirectToAction("IndexTeacher", "TeacherView");
            }
            return View("PartialView");
        }




        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
