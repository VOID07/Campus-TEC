using HotChocolate;
using HotChocolate.AspNetCore;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace dotnet_gql_test
{
  public class Startup
  {

    public void ConfigureServices(IServiceCollection services)
    {
      // Add DbContext
      services
        .AddDbContext<MyDbContext>(options =>
          options.UseSqlServer(MyDbContext.DbConnectionString));

      // Add GraphQL Services
      services
        .AddDataLoaderRegistry()
        .AddGraphQL(SchemaBuilder
            .New()
            // Here, we add the LocationQueryType as a QueryType
            .AddQueryType<LocationQueryType>()
            .Create());
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
    }    
  }
}