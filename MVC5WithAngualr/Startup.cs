using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC5WithAngualr.Startup))]
namespace MVC5WithAngualr
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
