using HotChocolate.Types;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotChocolate;
using Microsoft.EntityFrameworkCore;

using CampusTEC.Models;

namespace CampusTEC.Queries
{
    public class Query{
        public async Task<List<Locations>> GetLocations([Service] MyDbContext dbContext) =>
        await dbContext
            .Location
            .AsNoTracking()
            .OrderBy(o => o.Name)
            .ToListAsync();
        

        public async Task<List<Estudiantes>> GetEstudiantes([Service] MyDbContext dbContext) =>
        await dbContext
            .Estudiante
            .AsNoTracking()
            .OrderBy(o => o.ID)
            .ToListAsync();  

    }
}