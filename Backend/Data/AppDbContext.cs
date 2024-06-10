using DataBase.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataBase.Data
{
    public class AppDbContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public AppDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Friend> Friends { get; set; }
        public DbSet<Friendship> Friendships { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Director> Directors { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<Liked> LikedMovies { get; set; }
        public DbSet<Score> Scores { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = _configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseSqlServer(connectionString);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Настройка первичных ключей
            modelBuilder.Entity<User>().HasKey(u => u.UserID);
            modelBuilder.Entity<Friendship>().HasKey(f => f.FriendshipID);
            modelBuilder.Entity<Movie>().HasKey(m => m.MovieID);
            modelBuilder.Entity<Tag>().HasKey(t => t.TagID);
            modelBuilder.Entity<Genre>().HasKey(g => g.GenreID);
            modelBuilder.Entity<Director>().HasKey(d => d.DirectorID);
            modelBuilder.Entity<Country>().HasKey(c => c.CountryID);
            modelBuilder.Entity<Liked>().HasKey(l => new { l.UserID, l.MovieID });
            modelBuilder.Entity<Score>().HasKey(s => s.ScoreID);

            // Настройка связей
            modelBuilder.Entity<Friendship>()
           .HasOne(f => f.User)
           .WithMany(u => u.Friendships)
           .HasForeignKey(f => f.UserID)
           .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Friendship>()
                .HasOne(f => f.Friend)
                .WithMany(u => u.Friendships)
                .HasForeignKey(f => f.FriendID)
                .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Liked>()
                .HasOne(l => l.User)
                .WithMany(u => u.LikedMovies)
                .HasForeignKey(l => l.UserID);

            modelBuilder.Entity<Liked>()
                .HasOne(l => l.Movie)
                .WithMany(m => m.LikedMovies)
                .HasForeignKey(l => l.MovieID);

            modelBuilder.Entity<Movie>()
                .HasOne(m => m.Tag)
                .WithMany(t => t.Movies)
                .HasForeignKey(m => m.TagID);

            modelBuilder.Entity<Movie>()
                .HasOne(m => m.Genre)
                .WithMany(g => g.Movies)
                .HasForeignKey(m => m.GenreID);

            modelBuilder.Entity<Movie>()
                .HasOne(m => m.Director)
                .WithMany(d => d.Movies)
                .HasForeignKey(m => m.DirectorID);

            modelBuilder.Entity<Movie>()
                .HasOne(m => m.Country)
                .WithMany(c => c.Movies)
                .HasForeignKey(m => m.CountryID);

            modelBuilder.Entity<Score>()
            .HasOne(s => s.Friendship)
            .WithMany(f => f.Scores)
            .HasForeignKey(s => s.FriendshipID);

            modelBuilder.Entity<Score>()
                .HasOne(s => s.Movie)
                .WithMany(m => m.Scores)
                .HasForeignKey(s => s.MovieID);
        }
    }
}
