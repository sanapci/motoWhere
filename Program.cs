using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using motoWhere.Data;
var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("SqliteDatabase") ?? throw new InvalidOperationException("Connection string 'SqliteDatabase' not found.");

builder.Services.AddDbContext<ApplicationDbContext>(
    options => options.UseSqlServer(connectionString)
);

builder.Services.AddDefaultIdentity<User>(
    options => options.SignIn.RequireConfirmedAccount = true
).AddRoles<IdentityRole>(
).AddEntityFrameworkStores<ApplicationDbContext>(
);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.Configure<IdentityOptions>(options =>
{
    // Default Password settings.
    options.Password.RequireDigit = true;
    options.Password.RequireLowercase = true;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase = true;
    options.Password.RequiredLength = 6;
    options.Password.RequiredUniqueChars = 1;
});

builder.Services.ConfigureApplicationCookie(options =>
{
    // Cookie settings
    // options.Cookie.HttpOnly = true;
    // options.ExpireTimeSpan = TimeSpan.FromMinutes(60);

    options.LoginPath = "/Identity/Account/Login";
    // options.AccessDeniedPath = "/Identity/Account/AccessDenied";
    // options.SlidingExpiration = true;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();

app.MapRazorPages();

app.Run();
