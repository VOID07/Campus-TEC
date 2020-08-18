using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("Retos")]
    public class Retos

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RetoId { get; set; }
        [MaxLength(50)]
        public string Nombre { get; set; }
        [MaxLength(500)]
        public string Descripcion { get; set; }
        public int Semana { get; set; }
        public int Recompensa { get; set; }
        public virtual List<Actividades> Actividades { get; set; }
        public virtual List<RetosXObjetivo> Objetivos { get; set; }
        public virtual List<Comentarios> Comentarios { get; set; }
    }
}