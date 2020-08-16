using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.AspNetCore.Authorization;
using HotChocolate.Types;
using Microsoft.EntityFrameworkCore;

namespace CampusTEC.Models
{
    [Table("Estudiantes")]
    public class Estudiante

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int EstudianteId { get; set; }
        public int ID
        {
            get
            {
                return this.EstudianteId;
            }   
        }
        public int Carne { get; set; }
        [MaxLength(50)]
        public string Nombre_estudiante { get; set; }
        [MaxLength(50)]
        public string Apellido_estudiante { get; set; }
        public int Pin { get; set; }
        public bool Activo { get; set; }
        [MaxLength(50)]
        public string Email_1 { get; set; }
        [MaxLength(50)]
        public string Email_2 { get; set; }
        public int Telefono { get; set; }
        [MaxLength(500)]
        public string Foto { get; set; }
        public int Cantidad_TEColones { get; set; }
        public string Nombre_Sede { get; set; }
        public string Nombre_Universidad { get; set; }
        public string Nombre_Rol { get; set; }

        public virtual List<Matricula> Matriculas { get; set; }
        public virtual List<EstadoRetosEstudiante> EstadoRetos { get; set; }
        public virtual List<EstadoActividadesEstudiante> EstadoActividades { get; set; }
        public virtual List<Tareas> Tareas { get; set; }
        public virtual List<Comentarios> Comentarios { get; set; }
                  
    }

}