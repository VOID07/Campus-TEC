using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("Restricciones")]
    public class Restricciones

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RestriccionesId { get; set; }
        public int TEColonesXCurso { get; set; }
    }
}