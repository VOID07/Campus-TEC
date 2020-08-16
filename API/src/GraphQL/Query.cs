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
        [UseSelection]
        public IQueryable<Estudiante> GetEstudiante([Service] CampusTEC dbContext, int carne, int pin) =>
          dbContext.Estudiantes
            .Where(w => w.Carne == carne && w.Pin == pin);
        [UseSelection]
        public IQueryable<Profesor> GetProfesor([Service] CampusTEC dbContext, int carne, int pin) =>
          dbContext.Profesores
            .Where(w => w.Carne == carne && w.Pin == pin);
        [UseSelection]
        public IQueryable<Administrador> GetAdministador([Service] CampusTEC dbContext, int identificador, int pin) =>
          dbContext.Administradores
            .Where(w => w.Identificador == identificador && w.Pin == pin);
        [UseSelection]
        public IQueryable<EstadoRetosEstudiante> GetEstadoRetosEstudiante([Service] CampusTEC dbContext) =>
          dbContext.RetosEstudiante;
        [UseSelection]
        public IQueryable<EstadoRetosInstEstudiante> GetEstadoRetosInst([Service] CampusTEC dbContext) =>
          dbContext.RetosInstEstudiante;
    }
}