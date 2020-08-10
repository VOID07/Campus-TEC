using HotChocolate.Types;
using CampusTEC.Models;
using CampusTEC.Queries;
namespace CampusTEC.Schemas
{
  public class QueryType : ObjectType<Query>
  {
    protected override void Configure(IObjectTypeDescriptor<Query> descriptor)
    {
      base.Configure(descriptor);

      descriptor
        .Field(f => f.GetLocations(default))
        .UseFiltering();

      descriptor
          .Field(f => f.GetEstudiantes(default))
          .UseFiltering()
          ;
    }
  }
}
