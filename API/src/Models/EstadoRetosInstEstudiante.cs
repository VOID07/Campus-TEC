using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("EstadoRetosInstEstudiante")]
    public class EstadoRetosInstEstudiante

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EstadoRetoInstEstudianteId { get; set; }
        public bool Completado { get; set; }
        public virtual Estudiante Estudiante { get; set; }
        public virtual RetosInstitucionales RetoInstitucional { get; set; }
    }
}