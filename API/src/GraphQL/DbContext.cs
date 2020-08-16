using Microsoft.EntityFrameworkCore;
using CampusTEC.Models;
namespace CampusTEC
{
    public class CampusTEC : DbContext
    {
        public DbSet<Actividades> Actividades { get; set; }
        public DbSet<ActividadesXObjetivo> ActividadesXObjetivos { get; set; }
        public DbSet<ActividadesXRetos> ActividadesXRetos { get; set; }
        public DbSet<Administrador> Administradores { get; set; }
        public DbSet<Archivos> Archivos { get; set; }
        public DbSet<Comentarios> Comentarios { get; set; }
        public DbSet<Curso> Cursos { get; set; }
        public DbSet<EstadoActividadesEstudiante> ActividadesEstudiante { get; set; }
        public DbSet<EstadoRetosEstudiante> RetosEstudiante { get; set; }
        public DbSet<EstadoRetosInstEstudiante> RetosInstEstudiante { get; set; }
        public DbSet<Estudiante> Estudiantes { get; set; }
        public DbSet<Matricula> Matricula { get; set; }
        public DbSet<Objetivos> Objetivos { get; set; }
        public DbSet<PreguntasRetoInst> PreguntaRetoInst { get; set; }
        public DbSet<Profesor> Profesores { get; set; }
        public DbSet<Respuestas> Respuestas { get; set; }
        public DbSet<Restricciones> Restricciones { get; set; }
        public DbSet<Retos> Retos { get; set; }
        public DbSet<RetosInstitucionales> RetosInstitucionales { get; set; }
        public DbSet<Tareas> Tareas { get; set; }
        public static string DbConnectionString = "U2VydmVyPXRjcDpjYW1wdXMtdGVjLmRhdGFiYXNlLndpbmRvd3MubmV0LDE0MzM7SW5pdGlhbCBDYXRhbG9nPUNhbXB1cy1URUM7UGVyc2lzdCBTZWN1cml0eSBJbmZvPUZhbHNlO1VzZXIgSUQ9bGFsYWxhO1Bhc3N3b3JkPUNhbXB1c1RFQzIwMjA7TXVsdGlwbGVBY3RpdmVSZXN1bHRTZXRzPUZhbHNlO0VuY3J5cHQ9VHJ1ZTtUcnVzdFNlcnZlckNlcnRpZmljYXRlPUZhbHNlO0Nvbm5lY3Rpb24gVGltZW91dD0zMDs=";
        // Server=tcp:campus-tec.database.windows.net,1433;Initial Catalog=Campus-TEC;Persist Security Info=False;User ID=lalala;Password=CampusTEC2020;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {

            options.UseSqlServer(System.Text.ASCIIEncoding.ASCII.GetString(System.Convert.FromBase64String(CampusTEC.DbConnectionString)));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ActividadesXRetos>()
                .HasIndex(t => new { t.ActividadId, t.RetoId })
                .IsUnique();
            modelBuilder.Entity<ActividadesXObjetivo>()
                .HasIndex(t => new { t.ActividadId, t.ObjetivoId })
                .IsUnique();
            modelBuilder.Entity<ActividadesXComentario>()
                .HasIndex(t => new { t.ActividadId, t.ComentarioId })
                .IsUnique();
            modelBuilder.Entity<RetosXObjetivo>()
                .HasIndex(t => new { t.RetoId, t.ObjetivoId })
                .IsUnique();
           
        }
    }

}


