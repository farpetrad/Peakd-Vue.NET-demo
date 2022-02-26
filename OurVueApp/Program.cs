using Microsoft.AspNetCore.ResponseCompression;
using System.IO.Compression;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddHsts(options =>
{
    options.Preload = true;
    options.IncludeSubDomains = true;
    options.MaxAge = TimeSpan.FromDays(7);
}).AddResponseCompression(options =>
{
    options.EnableForHttps = true;
    options.Providers.Add<BrotliCompressionProvider>();
    options.Providers.Add<GzipCompressionProvider>();
    options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(new[] { "image/svg+xml", "application/xhml+xml", "image/x-icon" });
}).Configure<BrotliCompressionProviderOptions>(options =>
{
    options.Level = CompressionLevel.Optimal;
})
.Configure<GzipCompressionProviderOptions>(options =>
{
    options.Level = CompressionLevel.Optimal;
}).AddResponseCaching();


var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseResponseCompression()
    .UseResponseCaching();

var cachePeriod = app.Environment.IsDevelopment() ? "600" : "604900"; // dev 10 mins, otherwise 7 days and some change

app.UseDefaultFiles(new DefaultFilesOptions { DefaultFileNames = new List<string> { "index.html" } })
   .UseStaticFiles(new StaticFileOptions()
    {
        OnPrepareResponse = ctx =>
        {
            if (ctx.File.Name.EndsWith(".html"))
            {
                ctx.Context.Response.Headers.Add("Cache-Control", "no-cache, no-store");
                ctx.Context.Response.Headers.Add("Expires", "-1");
            }
            else
            {
                ctx.Context.Response.Headers.Append("Cache-Control", $"public, max-age={cachePeriod}");
            }
        }
    });


app.Run();
