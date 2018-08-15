﻿using Newtonsoft.Json;

namespace ReactLastFMWebApi.Models
{
	/// <summary>
	/// The album entity.
	/// </summary>
	public class Album
	{
		/// <summary>
		/// Gets or sets the name.
		/// </summary>
		/// <value>
		/// The name.
		/// </value>
		[JsonProperty("name")]
		public string Name { get; set; }

		/// <summary>
		/// Gets or sets the artist name.
		/// </summary>
		/// <value>
		/// The artist name.
		/// </value>
		[JsonProperty("artist")]
		public string Artist { get; set; }

		/// <summary>
		/// Gets or sets the URL.
		/// </summary>
		/// <value>
		/// The URL.
		/// </value>
		[JsonProperty("url")]
		public string Url { get; set; }

		/// <summary>
		/// Gets or sets the image.
		/// </summary>
		/// <value>
		/// The image.
		/// </value>
		[JsonProperty("image")]
		public Image[] Image { get; set; }
	}
}
