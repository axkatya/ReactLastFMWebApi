using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ServiceAgent;
using Swashbuckle.AspNetCore.Swagger;
using System;
using System.IO;
using System.Reflection;

namespace ReactLastFMWebApi
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

			Info info = new Info
			{
				Title = "Last FM API",
				Version = "v1"
			};

			info.Description = "Last FM API v1";

			services.AddSwaggerGen(c =>
			{
				c.SwaggerDoc("v1", info);

				var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.XML";
				var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
				if (File.Exists(xmlPath))
				{
					c.IncludeXmlComments(xmlPath);
				}
			});

			services.AddScoped<ILastFmServiceAgent, LastFmServiceAgent>();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
				app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
				{
					HotModuleReplacement = true,
					ReactHotModuleReplacement = true
				});
			}
			else
			{
				app.UseExceptionHandler("/Home/Error");
			}

			app.UseHttpsRedirection();
			app.UseStaticFiles();

			app.UseSwagger();

			app.UseSwaggerUI(c =>
			{
				c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
			});

			app.UseMvc(routes =>
			{
				routes.MapRoute(
					name: "default",
					template: "{controller=Home}/{action=Index}/{id?}");

				routes.MapSpaFallbackRoute(
					name: "spa-fallback",
					defaults: new { controller = "Home", action = "Index" });
			});
		}
    }
}
