using Newtonsoft.Json;

namespace ReactLastFMWebApi.Models
{
	public class ArtistSearchByNameResponse
    {
	    [JsonProperty("artist")]
		public Artist Artist { get; set; }
    }
}
