using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("ActividadesXObjetivo")]
    public class ActividadesXObjetivo

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ActividadesXObjetivoId { get; set; }
        public int ActividadId { get; set; }
        public int ObjetivoId { get; set; }
    }
}