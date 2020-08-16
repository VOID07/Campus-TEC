using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("ActividadesXRetos")]
    public class ActividadesXRetos

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ActividadesXRetosId { get; set; }
        public int  ActividadId { get; set; }
        public int  RetoId { get; set; }
    }
}