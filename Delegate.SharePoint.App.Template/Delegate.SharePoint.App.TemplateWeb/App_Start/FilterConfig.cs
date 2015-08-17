using System.Web;
using System.Web.Mvc;

namespace Delegate.SharePoint.App.TemplateWeb
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
