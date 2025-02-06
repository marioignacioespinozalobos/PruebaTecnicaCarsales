using PruebaTecnicaCarsalesServer.Models;
using PruebaTecnicaCarsalesServer.Service;
using PruebaTecnicaCarsalesServer.Interfaces;
using Microsoft.Extensions.Options;
using PruebaTecnicaCarsalesServer.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSwaggerGen();



builder.Services.AddCors(options => {
    options.AddDefaultPolicy(
          policy =>
          {
              policy.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
          });
});

builder.Services.Configure<BaseUrl>(
    builder.Configuration.GetSection("RickAndMortyApi")
);

builder.Services.AddScoped<IEpisodeService, EpisodeService>();

builder.Services.AddHttpClient<EpisodeService>();

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors();

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.UseSwagger();
app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Ejemplo de API"));

app.Run();