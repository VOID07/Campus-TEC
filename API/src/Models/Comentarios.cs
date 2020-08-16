using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HotChocolate.AspNetCore.Authorization;

namespace CampusTEC.Models
{
    [Table("Comentarios")]
    public class Comentarios

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ComentarioId { get; set; }
        public int ActividadId { get; set; }
        [MaxLength(500)]
        public string Comentario { get; set; }
        [MaxLength(500)]
        public virtual Archivos Archivo { get; set; }
    //     public virtual Actividades Actividad { get; set; }
    //     public virtual Retos Reto { get; set; }
    //     public virtual Estudiante Estudiante { get; set; }
    //     public virtual Profesor Profesor { get; set; }
    // 
    }
}