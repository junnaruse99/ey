using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args); // Creates a webapplicationbuilder with preconfigured defaults
builder.Services.AddDbContext<ArticuloDb>(opt => opt.UseInMemoryDatabase("webPage")); // Adds the database context to the dependency injection
// builder.Services.AddDatabaseDeveloperPageExceptionFilter(); // Enables displaying database related exceptions
var app = builder.Build(); // Creates a webapplication with preconfigured defaults

app.MapGet("/", () => "Hello World!");

app.MapGet("/api/articulos", async (ArticuloDb db) =>
{
    await db.Articulos.ToListAsync();
});

app.MapPost("/api/articulos", async (Articulo articuloInput, ArticuloDb db) =>
{
    // Check that code is unique
    var articulo = await db.Articulos.FirstOrDefaultAsync(x => x.codigo == articuloInput.codigo);

    if (articulo is not null) return Results.BadRequest();

    db.Articulos.Add(articuloInput);
    await db.SaveChangesAsync();

    return Results.Created($"/api/articulos/{articuloInput.id}", articuloInput);
});

app.MapPut("/api/articulos/{codigo}", async (string codigo, Articulo articuloInput, ArticuloDb db) =>
{
    var articulo = await db.Articulos.FirstOrDefaultAsync(x => x.codigo == codigo);

    if (articulo is null) return Results.NotFound();
    
    articulo.codigo = articuloInput.codigo;
    articulo.nombre = articuloInput.nombre;
    articulo.descripcion = articuloInput.descripcion;
    articulo.cantidad = articuloInput.cantidad;

    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.MapDelete("/api/articulos/{codigo}", async (string codigo, ArticuloDb db) =>
{
    if (await db.Articulos.FirstOrDefaultAsync(x => x.codigo == codigo) is Articulo articulo)
    {
        db.Articulos.Remove(articulo);
        await db.SaveChangesAsync();
        return Results.Ok(articulo);
    }

    return Results.NotFound();
});

app.Run();

// Model
class Articulo
{
    public int id { get; set; }
    public string codigo { get; set; } = string.Empty;
    public string? nombre { get; set; }
    public string? descripcion { get; set; }
    public int cantidad { get; set; }
}

// Database context
class ArticuloDb : DbContext
{
    public ArticuloDb(DbContextOptions<ArticuloDb> options)
        : base(options) { }

    public DbSet<Articulo> Articulos => Set<Articulo>();
}