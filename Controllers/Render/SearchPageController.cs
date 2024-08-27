using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewEngines;
using Sawyl.Models.ContentModels;
using Sawyl.Models.Search;
using Sawyl.Models.ViewModels;
using Sawyl.Services;
using Umbraco.Cms.Core.Web;
using Umbraco.Cms.Web.Common.Controllers;

namespace Sawyl.Controllers.Render
{
    public class SearchPageController(ILogger<RenderController> logger, ICompositeViewEngine compositeViewEngine, IUmbracoContextAccessor umbracoContextAccessor, IHttpContextAccessor httpContextAccessor, ISearchService searchService) : RenderController(logger, compositeViewEngine, umbracoContextAccessor)
    {
        public override IActionResult Index()
        {
            var httpContext = httpContextAccessor.HttpContext;
            var query = httpContext?.Request.Query["query"];
            var page = httpContext?.Request.Query["page"];

            if (CurrentPage == null) return BadRequest();

            var pageSize = 10;

            var searchRequest = new SearchRequestModel(query, page, pageSize);

            var searchResponse = searchService.Search(searchRequest);

            var pagination = new PaginationViewModel
            {
                TotalResults = searchResponse.TotalResultCount,
                TotalPages = (int)Math.Ceiling((double)(searchResponse.TotalResultCount / pageSize)),
                ResultsPerPage = searchRequest.PageSize,
                CurrentPage = searchRequest.Page
            };

            var model = new SearchPageContentModel(CurrentPage) 
            {
                SearchRequest = searchRequest,
                SearchResponse = searchResponse,
                Pagination = pagination
            };

            return CurrentTemplate(model);
        }
    }
}
