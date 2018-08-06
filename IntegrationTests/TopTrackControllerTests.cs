﻿using Xunit;

namespace IntegrationTests
{
	public class TopTrackControllerTests : IClassFixture<TestServerFixture>
	{
		private readonly TestServerFixture _fixture;

		public TopTrackControllerTests(TestServerFixture fixture)
		{
			_fixture = fixture;
		}

		[Fact]
		public async System.Threading.Tasks.Task GetTopTracks()
		{
			// Act
			var response = await _fixture.Client.GetAsync("/api/toptrack/cher");

			// Assert
			response.EnsureSuccessStatusCode();

			var responseString = await response.Content.ReadAsStringAsync();
			Assert.Contains("Believe", responseString);
		}
	}
}
