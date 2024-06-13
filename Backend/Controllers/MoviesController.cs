﻿using System;
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
    public class MoviesController : Controller
    {
        private readonly AppDbContext _context;

        public MoviesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: Movies
        public async Task<IActionResult> Index()
        {
            var appDbContext = _context.Movies.Include(m => m.Country).Include(m => m.Director).Include(m => m.Genre).Include(m => m.Tag);
            return View(await appDbContext.ToListAsync());
        }

        // GET: Movies/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var movie = await _context.Movies
                .Include(m => m.Country)
                .Include(m => m.Director)
                .Include(m => m.Genre)
                .Include(m => m.Tag)
                .FirstOrDefaultAsync(m => m.MovieID == id);
            if (movie == null)
            {
                return NotFound();
            }

            return View(movie);
        }

        // GET: Movies/Create
        public IActionResult Create()
        {
            ViewData["CountryID"] = new SelectList(_context.Countries, "CountryID", "CountryID");
            ViewData["DirectorID"] = new SelectList(_context.Directors, "DirectorID", "DirectorID");
            ViewData["GenreID"] = new SelectList(_context.Genres, "GenreID", "GenreID");
            ViewData["TagID"] = new SelectList(_context.Tags, "TagID", "TagID");
            return View();
        }

        // POST: Movies/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("MovieID,Name,Description,TagID,GenreID,Picture,DirectorID,CountryID")] Movie movie)
        {
            if (ModelState.IsValid)
            {
                _context.Add(movie);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["CountryID"] = new SelectList(_context.Countries, "CountryID", "CountryID", movie.CountryID);
            ViewData["DirectorID"] = new SelectList(_context.Directors, "DirectorID", "DirectorID", movie.DirectorID);
            ViewData["GenreID"] = new SelectList(_context.Genres, "GenreID", "GenreID", movie.GenreID);
            ViewData["TagID"] = new SelectList(_context.Tags, "TagID", "TagID", movie.TagID);
            return View(movie);
        }

        // GET: Movies/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var movie = await _context.Movies.FindAsync(id);
            if (movie == null)
            {
                return NotFound();
            }
            ViewData["CountryID"] = new SelectList(_context.Countries, "CountryID", "CountryID", movie.CountryID);
            ViewData["DirectorID"] = new SelectList(_context.Directors, "DirectorID", "DirectorID", movie.DirectorID);
            ViewData["GenreID"] = new SelectList(_context.Genres, "GenreID", "GenreID", movie.GenreID);
            ViewData["TagID"] = new SelectList(_context.Tags, "TagID", "TagID", movie.TagID);
            return View(movie);
        }

        // POST: Movies/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("MovieID,Name,Description,TagID,GenreID,Picture,DirectorID,CountryID")] Movie movie)
        {
            if (id != movie.MovieID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(movie);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!MovieExists(movie.MovieID))
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
            ViewData["CountryID"] = new SelectList(_context.Countries, "CountryID", "CountryID", movie.CountryID);
            ViewData["DirectorID"] = new SelectList(_context.Directors, "DirectorID", "DirectorID", movie.DirectorID);
            ViewData["GenreID"] = new SelectList(_context.Genres, "GenreID", "GenreID", movie.GenreID);
            ViewData["TagID"] = new SelectList(_context.Tags, "TagID", "TagID", movie.TagID);
            return View(movie);
        }

        // GET: Movies/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var movie = await _context.Movies
                .Include(m => m.Country)
                .Include(m => m.Director)
                .Include(m => m.Genre)
                .Include(m => m.Tag)
                .FirstOrDefaultAsync(m => m.MovieID == id);
            if (movie == null)
            {
                return NotFound();
            }

            return View(movie);
        }

        // POST: Movies/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie != null)
            {
                _context.Movies.Remove(movie);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool MovieExists(int id)
        {
            return _context.Movies.Any(e => e.MovieID == id);
        }
    }
}
