using Microsoft.Extensions.Options;
using PruebaTecnicaCarsalesServer.Data;
using PruebaTecnicaCarsalesServer.Interfaces;
using System.Text.Json;
using PruebaTecnicaCarsalesServer.Models;

namespace PruebaTecnicaCarsalesServer.Service

{
    public class EpisodeService : IEpisodeService
    {
        private readonly HttpClient _http;
        private readonly string baseUrl;


        public EpisodeService(HttpClient http, IOptions<BaseUrl> options)
        {
            _http = http;
            baseUrl = options.Value.baseUrl;
        }

        public async Task<CollectionGeneric<ICollection<Episode>>> GetEpisodeAll()
        {
            var response = new CollectionGeneric<ICollection<Episode>>();

            try
            {
                var collection = await _http.GetStringAsync($"{baseUrl}episode");
                var data = JsonDocument.Parse(collection);

                response.Info = data.RootElement.GetProperty("info").Deserialize<Info>();
                response.Info.Next = response.Info.Next;
                response.Info.Prev = response.Info.Prev;

                response.Results = data.RootElement.GetProperty("results").Deserialize<List<Episode>>();
                response.Success = true;
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.ErrorMessage = "Error al cargar la informacion " + ex.Message.ToString();
            }

            return response;
        }


        public async Task<CollectionGeneric<ICollection<Episode>>> GetUrlPagina(string pag)
        {
            var response = new CollectionGeneric<ICollection<Episode>>();

            try
            {
                var collection = await _http.GetStringAsync($"{baseUrl}episode?page="+pag);
                var data = JsonDocument.Parse(collection);

                response.Info = data.RootElement.GetProperty("info").Deserialize<Info>();
                response.Info.Next = response.Info.Next;
                response.Info.Prev = response.Info.Prev;

                response.Results = data.RootElement.GetProperty("results").Deserialize<List<Episode>>();
                response.Success = true;
            }
            catch (Exception ex)
            {
                response.Success = false;
                response.ErrorMessage = "Error al cargar la informacion " + ex.Message.ToString();
            }

            return response;
        }
    }
}
