using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularwithMvc.Startup))]
namespace AngularwithMvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
