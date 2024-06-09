using System;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using static System.Formats.Asn1.AsnWriter;
using DataBase.Models;
namespace DataBase.Data
{
    class Program
    {
        static void Main(string[] args)
        {
            using (var db = new AppDbContext())
            {
                // Ensure database is created
                db.Database.EnsureCreated();

                // Add a new user
                var user = new User { Logins = "john_doe", Passwords = "password123" };
                db.Users.Add(user);
                db.SaveChanges();
                // Add a new user1
                var user1 = new User { Logins = "Naatasha", Passwords = "password321" };
                db.Users.Add(user1);
                db.SaveChanges();
               
                // Add a new movie
                var tag = new Tag { Name = "Action" };
                var genre = new Genre { Name = "Thriller" };
                var director = new Director { Name = "Christopher Nolan" };
                var country = new Country { Name = "USA" };
                var movie = new Movie
                {
                    Name = "Inception",
                    Description = "A mind-bending thriller",
                    Tag = tag,
                    Genre = genre,
                    Picture = "inception.jpg",
                    Director = director,
                    Country = country
                };
                db.Movies.Add(movie);
                db.SaveChanges();
                //Add a score
                var score = new Score { MovieID = movie.MovieID, Value = 5 };
                db.Scores.Add(score);
                db.SaveChanges();
                //// Add a friend
                //var friend1 = new Friend { UserID = user.UserID };
                //db.Friends.Add(friend1);
                //db.SaveChanges();
                //Add friendships
                var friends1 = new Friendship { UserID = user.UserID, FriendID = user1.UserID };
                db.Friendships.Add(friends1);
                db.SaveChanges();
                // Link user and movie in Liked table
                var liked = new Liked { UserID = user.UserID, MovieID = movie.MovieID };
                db.LikedMovies.Add(liked);
                db.SaveChanges();

                // Query and display users
                var users = db.Users.ToList();
                foreach (var u in users)
                {
                    Console.WriteLine($"ID: {u.UserID}, Logins: {u.Logins}");
                }

                // Query and display movies
                var movies = db.Movies.ToList();
                foreach (var m in movies)
                {
                    Console.WriteLine($"ID: {m.MovieID}, Name: {m.Name}");
                }
            }
        }
    } 
}