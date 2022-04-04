#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using back.Context;
using back.Models;

namespace back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArticulosController : ControllerBase
    {
        private readonly ArticulosContext _context;

        public ArticulosController(ArticulosContext context)
        {
            _context = context;
        }

        // GET: api/Articulos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Articulos>>> GetArticulos(int pagina)
        {
            //if (pagina is 0) {
            //    return Ok(await _context.Articulos.CountAsync());
            //}

            return await _context.Articulos.ToListAsync();
        }

        // PUT: api/Articulos/ART001
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{codigo}")]
        public async Task<IActionResult> PutArticulos(string codigo, Articulos articuloInput)
        {
            if (codigo != articuloInput.codigo)
            {
                return BadRequest();
            }

            var articulo = await _context.Articulos.FirstOrDefaultAsync(x => x.codigo == codigo);
            
            if (articulo is null)
            {
                return NotFound();
            }

            articulo.nombre = articuloInput.nombre;
            articulo.descripcion = articuloInput.descripcion;
            articulo.cantidad = articuloInput.cantidad;


            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return NoContent();
        }

        // POST: api/Articulos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Articulos>> PostArticulos(Articulos articuloInput)
        {
            // Chequear que el codigo sea unico
            var articulo = await _context.Articulos.FirstOrDefaultAsync(x => x.codigo == articuloInput.codigo);
            if (articulo is not null)
            {
                return BadRequest();
            }

            _context.Articulos.Add(articuloInput);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArticulos", new { id = articuloInput.Id }, articuloInput);
        }

        // DELETE: api/Articulos/ART001
        [HttpDelete("{codigo}")]
        public async Task<IActionResult> DeleteArticulos(string codigo)
        {
            var articulo = await _context.Articulos.FirstOrDefaultAsync(x => x.codigo == codigo);

            if (articulo == null)
            {
                return NotFound();
            }

            _context.Articulos.Remove(articulo);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
