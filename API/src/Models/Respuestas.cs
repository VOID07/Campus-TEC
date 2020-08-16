using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("Respuestas")]
    public class Respuestas

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RespuestastId { get; set; }
        public int Respuesta { get; set; }
        public virtual PreguntasRetoInst Pregunta { get; set; }
        public virtual Estudiante Estudiante { get; set; }
    }
}