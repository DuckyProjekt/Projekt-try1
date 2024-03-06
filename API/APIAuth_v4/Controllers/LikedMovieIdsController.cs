using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JWTTokenAPI.Data;
using JWTTokenAPI.Models;

namespace JWTTokenAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LikedMovieIdsController : ControllerBase
    {
        private readonly JWTTokenAPIContext _context;

        public LikedMovieIdsController(JWTTokenAPIContext context)
        {
            _context = context;
        }

        // GET: api/LikedMovieIds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<LikedMovieIds>>> GetLikedMovieIds()
        {
          if (_context.LikedMovieIds == null)
          {
              return NotFound();
          }
            return await _context.LikedMovieIds.ToListAsync();
        }

        // GET: api/LikedMovieIds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LikedMovieIds>> GetLikedMovieIds(string id)
        {
          if (_context.LikedMovieIds == null)
          {
              return NotFound();
          }
            var likedMovieIds = await _context.LikedMovieIds.FindAsync(id);

            if (likedMovieIds == null)
            {
                return NotFound();
            }

            return likedMovieIds;
        }

        // PUT: api/LikedMovieIds/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutLikedMovieIds(string id, LikedMovieIds likedMovieIds)
        {
            if (id != likedMovieIds.Id)
            {
                return BadRequest();
            }

            _context.Entry(likedMovieIds).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LikedMovieIdsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/LikedMovieIds
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LikedMovieIds>> PostLikedMovieIds(LikedMovieIds likedMovieIds)
        {
          if (_context.LikedMovieIds == null)
          {
              return Problem("Entity set 'JWTTokenAPIContext.LikedMovieIds'  is null.");
          }
            _context.LikedMovieIds.Add(likedMovieIds);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (LikedMovieIdsExists(likedMovieIds.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetLikedMovieIds", new { id = likedMovieIds.Id }, likedMovieIds);
        }

        // DELETE: api/LikedMovieIds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLikedMovieIds(string id)
        {
            if (_context.LikedMovieIds == null)
            {
                return NotFound();
            }
            var likedMovieIds = await _context.LikedMovieIds.FindAsync(id);
            if (likedMovieIds == null)
            {
                return NotFound();
            }

            _context.LikedMovieIds.Remove(likedMovieIds);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LikedMovieIdsExists(string id)
        {
            return (_context.LikedMovieIds?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
