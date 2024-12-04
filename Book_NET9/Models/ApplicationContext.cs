using Microsoft.EntityFrameworkCore;
namespace Book_NET9.Models
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Student> Students { get; set; }
        public DbSet<Teacher> Teachers { get; set; }
        public DbSet<Result> Results { get; set; }
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) 
        {
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Result>()
                .HasOne(r => r.Student)
                .WithMany(s => s.Results)
                .HasForeignKey(r => r.Id_students);
        }

    }
}
