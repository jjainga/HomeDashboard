using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeDashboard.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HomeDashboard.Controllers
{
    [Route("api/Event")]
    [ApiController]
    public class EventController : Controller
    {

        private readonly ApplicationDbContext _db;

        public EventController(ApplicationDbContext db)
        {
            _db = db;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll() 
        {
            return Json(new {data = await _db.Event.ToListAsync() });
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id) 
        {
            var EventFromDb = await _db.Event.FirstOrDefaultAsync(u => u.Id == id);
            if(EventFromDb == null) {
                return Json(new { success = false, message= "Error while Deleting" });
            }
            _db.Event.Remove(EventFromDb);
            await _db.SaveChangesAsync();
            return Json(new { success = true, message = "Delete successful"});
        }
    }
}