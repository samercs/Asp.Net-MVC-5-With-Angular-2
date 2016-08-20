using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MVC5WithAngualr.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MVC5WithAngualr.Controllers
{
    public class DataController : Controller
    {
        // GET: Data
        public ActionResult Index()
        {
            var data = new List<Hero>();
            data.Add(new Hero()
            {
                Id = 1,
                Name = "Samer Al-Khatib"
            });
            data.Add(new Hero()
            {
                Id = 1,
                Name = "Jad Samer Al-Khatib"
            });

            JsonConvert.DefaultSettings = () => new JsonSerializerSettings
            {
                Formatting = Formatting.Indented,
                TypeNameHandling = TypeNameHandling.None,
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };
            var settings = new JsonSerializerSettings()
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            };

            var json = JsonConvert.SerializeObject(data, Formatting.None, settings);

            return Content(json);
        }
    }

    
}