using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("RetosInstitucionales")]
    public class RetosInstitucionales

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int RetoInstitucionalId { get; set; }
        [MaxLength(50)]
        public string Nombre { get; set; }
        [MaxLength(500)]
        public string Descripcion { get; set; }
        public bool Activo { get; set; }
        public virtual Administrador Administrador { get; set; }
    }
}