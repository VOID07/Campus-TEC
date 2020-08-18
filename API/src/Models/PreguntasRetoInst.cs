using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("PreguntasRetoInst")]
    public class PreguntasRetoInst

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PreguntasRetoInstId { get; set; }
        [MaxLength(500)]
        public string Pregunta { get; set; }
        [MaxLength(50)]
        public string Opcion1 { get; set; }
        [MaxLength(50)]
        public string Opcion2 { get; set; }
        [MaxLength(50)]
        public string Opcion3 { get; set; }
        [MaxLength(50)]
        public string Opcion4 { get; set; }
        public virtual RetosInstitucionales RetoInstucional { get; set; }
    }
}