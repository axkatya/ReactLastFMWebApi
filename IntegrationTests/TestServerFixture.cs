﻿using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.TestHost;
using System;
using System.Net.Http;

namespace IntegrationTests
{
	public class TestServerFixture : IDisposable
	{
		private readonly TestServer _testServer;
		public HttpClient Client { get; }

		public TestServerFixture()
		{
			_testServer = new TestServer(new WebHostBuilder()
		 .UseStartup<ReactLastFMWebApi.Startup>());
			Client = _testServer.CreateClient();
		}

		public void Dispose()
		{
			Client.Dispose();
			_testServer.Dispose();
		}
	}
}
