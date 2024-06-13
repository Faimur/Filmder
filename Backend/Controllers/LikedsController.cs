using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DataBase.Data;
using DataBase.Models;

namespace DataBaseCreator.Controllers
{
    public class LikedsController : Controller
    {
        private readonly AppDbContext _context;

        public LikedsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: Likeds
        public async Task<IActionResult> Index()
        {
            var appDbContext = _context.LikedMovies.Include(l => l.Movie).Include(l => l.User);
            return View(await appDbContext.ToListAsync());
        }

        // GET: Likeds/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var liked = await _context.LikedMovies
                .Include(l => l.Movie)
                .Include(l => l.User)
                .FirstOrDefaultAsync(m => m.UserID == id);
            if (liked == null)
            {
                return NotFound();
            }

            return View(liked);
        }

        // GET: Likeds/Create
        public IActionResult Create()
        {
            ViewData["MovieID"] = new SelectList(_context.Movies, "MovieID", "MovieID");
            ViewData["UserID"] = new SelectList(_context.Users, "UserID", "UserID");
            return View();
        }

        // POST: Likeds/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("UserID,MovieID")] Liked liked)
        {
            if (ModelState.IsValid)
            {
                _context.Add(liked);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["MovieID"] = new SelectList(_context.Movies, "MovieID", "MovieID", liked.MovieID);
            ViewData["UserID"] = new SelectList(_context.Users, "UserID", "UserID", liked.UserID);
            return View(liked);
        }

        // GET: Likeds/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var liked = await _context.LikedMovies.FindAsync(id);
            if (liked == null)
            {
                return NotFound();
            }
            ViewData["MovieID"] = new SelectList(_context.Movies, "MovieID", "MovieID", liked.MovieID);
            ViewData["UserID"] = new SelectList(_context.Users, "UserID", "UserID", liked.UserID);
            return View(liked);
        }

        // POST: Likeds/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("UserID,MovieID")] Liked liked)
        {
            if (id != liked.UserID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(liked);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!LikedExists(liked.UserID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            ViewData["MovieID"] = new SelectList(_context.Movies, "MovieID", "MovieID", liked.MovieID);
            ViewData["UserID"] = new SelectList(_context.Users, "UserID", "UserID", liked.UserID);
            return View(liked);
        }

        // GET: Likeds/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var liked = await _context.LikedMovies
                .Include(l => l.Movie)
                .Include(l => l.User)
                .FirstOrDefaultAsync(m => m.UserID == id);
            if (liked == null)
            {
                return NotFound();
            }

            return View(liked);
        }

        // POST: Likeds/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var liked = await _context.LikedMovies.FindAsync(id);
            if (liked != null)
            {
                _context.LikedMovies.Remove(liked);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool LikedExists(int id)
        {
            return _context.LikedMovies.Any(e => e.UserID == id);
        }
    }
}
