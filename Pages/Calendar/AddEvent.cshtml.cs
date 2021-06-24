using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeDashboard.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace HomeDashboard.Pages.Calendar
{
    public class AddEventModel : PageModel
    {
        
        private readonly ApplicationDbContext _db;

        public AddEventModel(ApplicationDbContext db)
        {
            _db = db;
        }

        [BindProperty]
        public Event Event { get; set; }

        public void OnGet()
        {

        }

        public async Task<IActionResult> OnPost()
        {
            if(ModelState.IsValid)
            {
               await  _db.Event.AddAsync(Event);
               await _db.SaveChangesAsync();
                return RedirectToPage("Index");
            }
            else
            {
                return Page();
            }
        }
        
    }
}