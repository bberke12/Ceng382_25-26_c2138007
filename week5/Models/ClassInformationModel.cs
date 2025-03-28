using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using week5.Models;
using System.Collections.Generic;
using System.Linq;

namespace week5.Pages
{
    public class IndexModel : PageModel
    {
        // Static list to store class information
        public static List<ClassInformationModel> ClassList { get; set; } = new List<ClassInformationModel>();

        [BindProperty]
        public ClassInformationModel NewClass { get; set; } = new ClassInformationModel();

        public void OnGet() { }

        public IActionResult OnPostAdd()
        {
            if (!ModelState.IsValid)
                return Page();

            // Accessing ClassList with the class name because it is static
            IndexModel.ClassList.Add(NewClass);
            return RedirectToPage();
        }

        public IActionResult OnPostDelete(int id)
        {
            // Accessing ClassList with the class name because it is static
            var item = IndexModel.ClassList.FirstOrDefault(x => x.Id == id);
            if (item != null)
            {
                IndexModel.ClassList.Remove(item);
            }
            return RedirectToPage();
        }
    }
}