using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("ActividadesXComentario")]
    public class ActividadesXComentario

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ActividadesXComentarioId { get; set; }
        public int ComentarioId { get; set; }
        public int ActividadId { get; set; }
    }
}