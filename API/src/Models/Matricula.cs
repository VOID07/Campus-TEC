using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("Matricula")]
    public class Matricula

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MatriculaId { get; set; }
        public virtual Estudiante Estudiante { get; set; }
        public virtual Curso Curso { get; set; }
    }
}