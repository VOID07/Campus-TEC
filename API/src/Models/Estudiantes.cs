using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
  [Table("Estudiantes")]
  public class Estudiantes
  {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ID { get; set; }

    public int Carne { get; set; }

    public string Nombre_estudiante { get; set; }

    public string Apellido_estudiante { get; set; }

    public int  Pin { get; set; }

    public bool Activo { get; set; }

    public string Email_1 { get; set; }

    public string Email_2 { get; set; }

    public int Telefono { get; set; }

    public string Foto { get; set; }

    public int Cantidad_TEColones { get; set; }

    public int Rol { get; set; }

    public int Universidad { get; set; }

    public int Sede { get; set; }
  }
}