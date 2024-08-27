using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Sawyl.Models.ContentModels;
using Sawyl.Models.Search;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Controllers;

namespace Sawyl.Controllers.Render
{
    public class SearchPageController(ILogger<RenderController> logger, ICompositeViewEngine compositeViewEngine, IUmbracoContextAccessor umbracoContextAccessor, IHttpContextAccessor httpContextAccessor) : RenderController(logger, compositeViewEngine, umbracoContextAccessor)
    {
        public override IActionResult Index()
        {
            var httpContext = httpContextAccessor.HttpContext;
            var query = httpContext?.Request.Query["query"];
            var searchRequest = new SearchRequestModel(query);
            var model = new SearchPageContentModel(CurrentPage) 
            {
                SearchRequest = searchRequest
            };

            return CurrentTemplate(model);
        }
    }
}
