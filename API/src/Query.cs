using HotChocolate.Types;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using Microsoft.EntityFrameworkCore;

using CampusTEC.Models;

namespace CampusTEC.Queries
{
    public class Query
    {
        public async Task<List<Estudiante>> GetEstudiante([Service] CampusTEC dbContext, int carne, int pin) =>
      await dbContext
        .Estudiantes
        .AsNoTracking()
        .Where(w => w.Carne == carne && w.Pin == pin)
        .ToListAsync();

      //   public async Task<List<Universidad>> GetUniversidad([Service] CampusTEC dbContext, int ID) =>
      // await dbContext
      //   .Uni
      //   .AsNoTracking()
      //   .Where(w => w.ID == ID )
      //   .ToListAsync();
    }
}