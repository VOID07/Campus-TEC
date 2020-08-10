using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CampusTEC.Models
{
  [Table("Locations")]
  public class Locations
  {
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int ID { get; set; }

    public string Name { get; set; }

    [Required, MaxLength(5)]
    public string Code { get; set; }

    [Required]
    public bool Active { get; set; }
  }
}