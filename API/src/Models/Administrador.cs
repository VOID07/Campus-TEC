using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
    [Table("Administradores")]
    public class Administrador

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AdministradorId { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Identificador { get; set; }
        public int Pin { get; set; }
        public bool Activo { get; set; }
        public string NombreRol { get; set; }
        public virtual List<RetosInstitucionales> RetosInstitucionales { get; set; }
    }
}