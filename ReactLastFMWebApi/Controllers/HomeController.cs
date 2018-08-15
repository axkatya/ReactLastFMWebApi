using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ReactLastFMWebApi.Controllers
{
	/// <summary>
	/// The default controller.
	/// </summary>
	/// <seealso cref="Microsoft.AspNetCore.Mvc.Controller" />
	public class HomeController : Controller
    {
		/// <summary>
		/// Indexes this instance.
		/// </summary>
		/// <returns></returns>
		public IActionResult Index()
        {
            return View();
        }

		/// <summary>
		/// Errors this instance.
		/// </summary>
		/// <returns></returns>
		public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
