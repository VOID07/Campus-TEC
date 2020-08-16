using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("RetosXObjetivo")]
    public class RetosXObjetivo

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RetosXObjetivoId { get; set; }
        public int RetoId { get; set; }
        public int ObjetivoId { get; set; }
    }
}