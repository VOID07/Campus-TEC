using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("Actividades")]
    public class Actividades

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ActividadId { get; set; }
        [MaxLength(50)]
        public string Nombre { get; set; }
        [MaxLength(500)]
        public string Descripcion { get; set; }
        public int Semana { get; set; }
        public virtual List<ActividadesXRetos> Retos { get; set; }
        public virtual List<ActividadesXObjetivo> Objetivos { get; set; }
        public virtual List<Comentarios> Comentarios { get; set; }

    }
}