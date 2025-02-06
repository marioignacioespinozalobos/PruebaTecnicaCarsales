using System.Text.Json.Serialization;

namespace PruebaTecnicaCarsalesServer.Models
{
    public class Episode
    {
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [JsonPropertyName("name")]
        public string Name { get; set; }

        [JsonPropertyName("air_date")]
        public string Air_date { get; set; }

        [JsonPropertyName("episode")]
        public string CEpisode { get; set; }

        [JsonPropertyName("characters")]
        public string[] Qcharacters { get; set; }

        [JsonPropertyName("url")]
        public string Url { get; set; }

        [JsonPropertyName("created")]
        public string Created { get; set; }
    }
}


