// CfdiQuery.cs — resolver GraphQL (HotChocolate)
public class CfdiQuery
{
    [UseFiltering]
    [UseSorting]
    public IQueryable<Cfdi> GetCfdis(
        [Service] AppDbContext context,
        [Service] ICurrentUserContext currentUser,
        string rfc)
    {
        return context.Cfdis.Where(c => c.Rfc == rfc);
    }
}
