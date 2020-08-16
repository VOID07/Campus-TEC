using System;
using HotChocolate;
using HotChocolate.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using HotChocolate.Execution.Configuration;
using CampusTEC.Models;
using Newtonsoft.Json.Linq;
using System.IO;
using CampusTEC.Queries;

namespace CampusTEC
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContext<CampusTEC>();
            // Add GraphQL Services
            services
              .AddDataLoaderRegistry()
              .AddGraphQL(SchemaBuilder.New()
                  .AddQueryType<Query>()
                  .Create(),
                  new QueryExecutionOptions { ForceSerialExecution = true });
        }


        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            InitializeDatabase(app);
            if (env.IsDevelopment())
                app.UseDeveloperExceptionPage();

            app
              .UseRouting()
              .UseWebSockets()
              .UseGraphQL()
              .UsePlayground();

            JObject data = JObject.Parse(File.ReadAllText("./src/Data/instrospectionSchema.json"));
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/API/", async context =>
                {
                    await context.Response.WriteAsync(data.ToString());
                });
            });
        }

        private static void InitializeDatabase(IApplicationBuilder app)
        {
            using var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope();
            var context = serviceScope.ServiceProvider.GetRequiredService<CampusTEC>();
            context.Database.EnsureCreated();
            // if ()
            // {
            //     var Estudiante1 = new Estudiante
            //     {
            //         Carne = 2015068804,
            //         Nombre_estudiante = "Yendry ",
            //         Apellido_estudiante = "Díaz",
            //         Pin = 1234,
            //         Activo = true,
            //         Email_1 = "yenmari11@gmail.com",
            //         Email_2 = "yediaz@estudiantec.cr",
            //         Telefono = 86179000,
            //         Foto = "Foto",
            //         Cantidad_TEColones = 1000,
            //         Nombre_Rol = "Estudiante",
            //         Nombre_Universidad = "Instituto X-Tecnológico de Costa Rica",
            //         Nombre_Sede = "Cartago"
            //     };
            //     var Estudiante2 = new Estudiante
            //     {
            //         Carne = 2015127575,
            //         Nombre_estudiante = "Dagoberto ",
            //         Apellido_estudiante = "Rojas",
            //         Pin = 7215,
            //         Activo = true,
            //         Email_1 = "krojas96@estudiantec.cr",
            //         Email_2 = "",
            //         Telefono = 87660519,
            //         Foto = "Foto",
            //         Cantidad_TEColones = 1000,
            //         Nombre_Rol = "Estudiante",
            //         Nombre_Universidad = "Instituto X-Tecnológico de Costa Rica",
            //         Nombre_Sede = "Cartago"
            //     };
            //     var Estudiante3 = new Estudiante
            //     {
            //         Carne = 2016193299,
            //         Nombre_estudiante = "Jung-Hwan ",
            //         Apellido_estudiante = "Bak",
            //         Pin = 1337,
            //         Activo = true,
            //         Email_1 = "bakkim05@gmail.com",
            //         Email_2 = "bakkim@estudiantec.cr",
            //         Telefono = 72971790,
            //         Foto = "Foto",
            //         Cantidad_TEColones = 99999,
            //         Nombre_Rol = "Estudiante",
            //         Nombre_Universidad = "Instituto X-Tecnológico de Costa Rica",
            //         Nombre_Sede = "Cartago"
            //     };
            //     var Profesor1 = new Profesor
            //     {
            //         NombreProfesor = "Daniel",
            //         ApellidoProfesor = "Madriz",
            //         Carne = 3060,
            //         Pin = 1707,
            //         Activo = true,
            //         NombreRol = "Profesor",
            //         Email_1 = "d.matriz@x-tec.ac.cr",
            //         Email_2 = "",
            //         Telefono = 85206548,
            //         Foto = "Foto"
            //     };
            //     var Curso = new Curso
            //     {
            //         NombreCurso = "Especificación y diseño de software",
            //         CodigoCurso = "CE4101",
            //         Profesor = Profesor1
            //     };
                
            //     context.Matricula.Add(new Matricula
            //     {
            //         Estudiante = Estudiante1,
            //         Curso = Curso
            //     });

            //     context.SaveChangesAsync();
            // }

        }
    }
}