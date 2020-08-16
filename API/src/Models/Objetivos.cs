using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("Objetivos")]
    public class Objetivos

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ObjetivoId { get; set; }
        [MaxLength(50)]
        public string Nombre { get; set; }
        [MaxLength(500)]
        public string Descripcion { get; set; }
        public virtual Curso Curso { get; set; }
        public virtual List<Retos> Retos { get; set; }
        public virtual List<Actividades> Actividades { get; set; }
    }
}