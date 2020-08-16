using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("EstadoActividadesEstudiante")]
    public class EstadoActividadesEstudiante

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EstadoActividadesEstudianteId { get; set; }
        public bool Completado { get; set; }
        public virtual Estudiante Estudiante { get; set; }
        public virtual Actividades Actividad { get; set; }
    }
}