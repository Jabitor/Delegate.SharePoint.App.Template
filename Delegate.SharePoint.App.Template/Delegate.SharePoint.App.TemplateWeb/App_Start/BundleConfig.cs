using System.Web;
using System.Web.Optimization;

namespace Delegate.SharePoint.App.TemplateWeb
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                "~/Scripts/jquery-2.1.4.min.js",
                "~/Scripts/spcontext.js",
                "~/Scripts/angular.min.js",
                "~/Scripts/angular-translate.min.js",
                "~/App/common/providers/AppService.js",
                "~/App/common/resources/da-DK.js",
                "~/App/common/resources/en-US.js",
                "~/App/modules/home/homeCtrl.js",
                "~/App/Config.js",
                "~/App/Module.js"
                ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }
}
