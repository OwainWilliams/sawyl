using Sawyl.Models.Search;
using Sawyl.Models.ViewModels;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;

namespace Sawyl.Models.ContentModels
{
    public class SearchPageContentModel(IPublishedContent? content) : ContentModel(content)
    { 
        public SearchRequestModel? SearchRequest { get; set; }
        public SearchResponseModel? SearchResponse { get; set; }
        public PaginationViewModel? Pagination {  get; set; }
    }
}
