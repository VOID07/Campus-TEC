using HotChocolate;
using HotChocolate.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using CampusTEC.Schemas;
using HotChocolate.Execution.Configuration;
using CampusTEC.Models;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json.Linq;
using System.IO;

namespace CampusTEC
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            // Add DbContext
            services
              .AddDbContext<CampusTEC>(options =>
                options.UseSqlServer(CampusTEC.DbConnectionString));

            // Add GraphQL Services
            services
              .AddDataLoaderRegistry()
              .AddGraphQL(SchemaBuilder.New()
                  // Here, we add the LocationQueryType as a QueryType

                  .AddQueryType<QueryType>()
                  .AddAuthorizeDirectiveType()
                  .Create(),
                  new QueryExecutionOptions { ForceSerialExecution = true });
        }


        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
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
    }
}