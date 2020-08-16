using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("EstadoRetosEstudiante")]
    public class EstadoRetosEstudiante

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EstadoRetosEstudianteId { get; set; }
        public bool Completado { get; set; }
        public virtual Estudiante Estudiante { get; set; }
        public virtual Retos Reto { get; set; }
    }
}