using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using HotChocolate.AspNetCore.Authorization;

namespace CampusTEC.Models
{
    [Table("Archivos")]
    public class Archivos

    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ArchivoId { get; set; }
        [MaxLength(500)]
        public string Archivo { get; set; }
    }
}