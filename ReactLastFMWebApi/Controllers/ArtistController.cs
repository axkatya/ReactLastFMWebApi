using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ReactLastFMWebApi.Models;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;

namespace ReactLastFMWebApi.Controllers
{
	[Route("api/[controller]")]
	public class ArtistController : Controller
	{
		[HttpGet("{artistName}")]
		public async Task<Artist> Get(string artistName)
		{
			HttpClient client = new HttpClient();
			client.DefaultRequestHeaders.Accept.Clear();
			client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
			client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

			var response = await client.GetStringAsync("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistName + "&api_key=91c70ecd632c37f12855243d9526cc6f&format=json");
			ArtistSearchByNameResponse result = JsonConvert.DeserializeObject<ArtistSearchByNameResponse>(response);
			if (result != null)
			{
				Artist artist = result.Artist;
				return artist;
			}

			return new Artist();
		}
	}
}
