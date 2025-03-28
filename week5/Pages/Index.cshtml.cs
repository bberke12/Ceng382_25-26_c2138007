using System.ComponentModel.DataAnnotations;

namespace week5.Models
{
    public class ClassInformationModel
    {
        private static int counter = 1;

        public ClassInformationModel()
        {
            Id = counter++;
        }

        public int Id { get; private set; }

        [Required]
        public string ClassName { get; set; }

        [Required]
        public int StudentCount { get; set; }

        public string Description { get; set; }
    }
}