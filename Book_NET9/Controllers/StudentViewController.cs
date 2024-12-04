using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Book_NET9.Models;
using Book_NET9.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace Book_NET9.Controllers
{
    public class StudentViewController : Controller
    {
        private ApplicationContext db;
        public StudentViewController(ApplicationContext context)
        {
            db = context;
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> SaveResult(Result result)
        {
            if (result == null)
            {
                return View("IndexStudent"); // Возвращаем представление, если результат пустой
            }

            // Проверяем, существует ли запись с данным ID студента
            var data = await db.Results.FirstOrDefaultAsync(x => x.Id_students == result.Id_students);
            if (data != null)
            {
                data.Lessons = result.Lessons;
                data.Id_students = result.Id_students;
                data.Final = result.Final;
                data.count = result.count;
                db.Results.Update(data);
                db.SaveChangesAsync();
                TempData["ID_Student"] = result.Id_students;
                return RedirectToAction("IndexStudent", "StudentView");
            }
            if (result != null)
            {
                db.Results.AddAsync(result);
                db.SaveChangesAsync();
                TempData["ID_Student"] = result.Id_students;
                return RedirectToAction("IndexStudent", "StudentView");
            }
            return RedirectToAction("IndexStudent", "StudentView");
        }
        public IActionResult IndexStudent()
        {
            return View();
        }
        public IActionResult TestView1()
        {
            
            return View("~/Views/StudentView/Test/Test1/TestView1.cshtml");
        }

    }
}
