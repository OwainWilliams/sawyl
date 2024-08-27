using Sawyl.Models.Search;

namespace Sawyl.Services
{
    public interface ISearchService
    {
        public SearchResponseModel Search(SearchRequestModel searchRequest);
    }
}
