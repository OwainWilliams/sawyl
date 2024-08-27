using Sawyl.Models.Search;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Web.Common.PublishedModels;

namespace Sawyl.Models.ContentModels
{
    public class SearchPageContentModel(IPublishedContent? content) : ContentModel(content)
    {
        public SearchRequestModel? SearchRequest { get; set; }
    }
}
