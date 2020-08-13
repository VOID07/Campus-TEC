using Microsoft.EntityFrameworkCore;
using CampusTEC.Models;
namespace CampusTEC
{
    public class CampusTEC : DbContext
    {
        public static string DbConnectionString = "Server=tcp:campus-tec.database.windows.net,1433;Initial Catalog=Campus-TEC;Persist Security Info=False;User ID=lalala;Password=CampusTEC2020;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
// Server=tcp:campus-tec.database.windows.net,1433;Initial Catalog=Campus-TEC;Persist Security Info=False;User ID=lalala;Password=CampusTEC2020;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;

        public CampusTEC(DbContextOptions<CampusTEC> options) : base(options)
    {}
        public DbSet<Estudiante> Estudiantes { get; set; }

    }
}