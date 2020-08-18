using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("Profesores")]
    public class Profesor

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ProfesorId { get; set; }
        [MaxLength(50)]
        public string NombreProfesor { get; set; }
        [MaxLength(50)]
        public string ApellidoProfesor { get; set; }
        public int Carne { get; set; }
        public int Pin { get; set; }
        public bool Activo { get; set; }
        public string NombreRol { get; set; }
        public string Email_1 { get; set; }
        public string Email_2 { get; set; }
        public int Telefono { get; set; }
        [MaxLength(500)]
        public string Foto { get; set; }
        public virtual List<Curso> Cursos { get; set; }
        public virtual List<Comentarios> Comentarios { get; set; }
    }
}