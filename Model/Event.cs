using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace HomeDashboard.Model
{
    public class Event
    {
        [Key]
        public int Id {get; set;}

        [Required]
        public string Title {get; set;}
        public string Description {get; set;}
        public string startTime {get; set;}
        public string endTime {get;set;}
    }
}