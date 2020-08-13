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
          .Field(f => f.GetEstudiante(default, default, default))
          .Argument("carne", a => a.Type<IntType>())
          .Argument("pin", a => a.Type<IntType>())
          .UseFiltering();
          
    }
  }
}
