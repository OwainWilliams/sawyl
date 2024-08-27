using Sawyl.Services;
using Umbraco.Cms.Core.Composing;

namespace Sawyl.Composers
{
    public class RegisterServicesComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.Services.AddTransient<ISearchService, SearchService>();
        }
    }
}
