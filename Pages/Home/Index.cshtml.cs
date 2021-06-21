using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeDashboard.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Moment.js;


namespace HomeDashboard.Pages.Home
{
    
    public class IndexModel : PageModel
    {
     
        public string Today = moment().format("MMMM Do YYYY");
        public void Home() {

        }
        
        
    }
}