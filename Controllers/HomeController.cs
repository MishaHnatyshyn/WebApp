using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using React.Sample.Webpack.CoreMvc;
using ReactDemo.Models;

namespace ReactDemo.Controllers
{
	public class HomeController : Controller
	{
		private static readonly DataBase db;
		private static IMongoCollection<CarModel> cars;

		static HomeController()
		{
			db = new DataBase();
			cars = db.GetCollection("cars");
		}

		public ActionResult Index()
		{
			return View();
		}

		[Route("api/cars")]
		public List<CarModel> Comments()
		{
			var result = cars.Find(_ => true).ToList();
			return result;
		}
	}
}