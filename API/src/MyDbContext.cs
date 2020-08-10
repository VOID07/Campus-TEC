using Microsoft.EntityFrameworkCore;
using CampusTEC.Models;

namespace CampusTEC
{
  public class MyDbContext: DbContext
  {
    public static string DbConnectionString = "Server=tcp:campus-tec.database.windows.net,1433;Initial Catalog=Campus-TEC;Persist Security Info=False;User ID=lalala;Password=CampusTEC2020;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

    public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
    {}

    public DbSet<Locations> Location { get; set; }

    public DbSet<Estudiantes> Estudiante { get; set; }

  }
}