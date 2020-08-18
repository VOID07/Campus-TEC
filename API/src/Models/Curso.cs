using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HotChocolate.AspNetCore.Authorization;
using System.Collections.Generic;

namespace CampusTEC.Models
{
    [Table("Cursos")]
    public class Curso

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CursoId { get; set; }
        public string NombreCurso { get; set; }
        public string CodigoCurso { get; set; }
        public virtual Profesor Profesor { get; set; }
        public virtual List<Objetivos> Objetivos { get; set; }
    }
}