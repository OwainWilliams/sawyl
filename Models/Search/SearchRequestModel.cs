namespace Sawyl.Models.Search
{
    public class SearchRequestModel
    {
        public string? Query { get; set; }
        public SearchRequestModel(string? query)
        {
            Query = query;
        }
    }
}
