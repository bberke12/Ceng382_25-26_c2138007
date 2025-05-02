using week5.Data;
using week5.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace week5.Pages.Classes
{
    public class IndexModel : PageModel
    {
        private readonly SchoolDbContext _context;

        public IndexModel(SchoolDbContext context)
        {
            _context = context;
        }

        public IList<Class> Classes { get; set; }

        public async Task OnGetAsync()
        {
            Classes = await _context.Classes.ToListAsync();
        }
    }
}