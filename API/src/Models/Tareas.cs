using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("Tareas")]
    public class Tareas

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TareaId { get; set; }
        [MaxLength(50)]
        public string Nombre { get; set; }
        [MaxLength(500)]
        public string Descripcion { get; set; }
        public bool Estado { get; set; }
        public int Semana { get; set; }
        public int Dia { get; set; }
        public int HInicio { get; set; }
        public int HFinal { get; set; }
        public virtual Actividades Actividad { get; set; }
        public virtual Estudiante Estudiante { get; set; }
        public virtual List<Comentarios> Comentarios { get; set; }
    }
}