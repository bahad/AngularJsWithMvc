using AngularwithMvc.Helper;
using AngularwithMvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularwithMvc.Controllers
{
    public class HomeController : Controller
    {
        NorthwindEntities db = new NorthwindEntities();
        public ActionResult Index()
        {
            return View();
        }        
        public ActionResult GetPaggedData(int pageNumber=1, int pageSize = 20)
        {
            List<Product> data = db.Products.ToList();
            var paggedData = Paggination.PagedResult(data,pageNumber,pageSize);
            return Json(paggedData,JsonRequestBehavior.AllowGet);

           
        }
    }
}