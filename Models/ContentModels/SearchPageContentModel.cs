using Sawyl.Models.Search;
using Sawyl.Models.ViewModels;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Strings;
using Umbraco.Cms.Web.Common.PublishedModels;

namespace Sawyl.Models.ContentModels
{
    public class SearchPageContentModel(IPublishedContent? content) : ContentModel(content), IBannerProperties
    {
        public SearchRequestModel? SearchRequest { get; set; }
        public SearchResponseModel? SearchResponse { get; set; }
        public PaginationViewModel? Pagination { get; set; }

        public IHtmlEncodedString? BannerContent => Content.Value<IHtmlEncodedString>("bannerContent");
        public string? BannerTitle => Content.Value<string>("bannerTitle");

        public IPublishedContentType ContentType => Content.ContentType;

        public Guid Key => Content.Key;

        public IEnumerable<IPublishedProperty> Properties => Content.Properties;

        public IPublishedProperty? GetProperty(string alias)
        {
            return Content.GetProperty(alias);
        }
    }
}
