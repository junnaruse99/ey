namespace back.Context
{
    using Microsoft.EntityFrameworkCore;
    using back.Models;
    public class ArticulosContext : DbContext
    {
        public ArticulosContext(DbContextOptions<ArticulosContext> options) : base(options)
        {

        }

        public DbSet<Articulos> Articulos { get; set; } = null;
    }
}
