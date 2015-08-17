module $rootnamespace$ {
    // Note that the service is NOT prefixed with $, 
    // $ is only recommended for native angular js services
    export class AppService {
        constructor() { }

        // Returns the value of a specific url parameter
        public GetQueryStringParameter = (paramKey: string): string => {
            var params = document.URL.split("?")[1].split("&");
            var strParams = "";
            strParams = "";
            for (var i = 0; i < params.length; i = i + 1) {
                var singleParam = params[i].split("=");
                if (singleParam[0] == paramKey) {
                    return singleParam[1];
                }
            }
        }

        // Get's the app web url, from the URL
        public GetAppWebUrl = (): string => {
            return decodeURIComponent(this.GetQueryStringParameter("SPAppWebUrl"));
        }

        // Get's the Client Tag, from the URL
        public GetClientTagToken = (): string => {
            return decodeURIComponent(this.GetQueryStringParameter("SPClientTag"));
        }

        // Appends the host web stylesheet to the head tag
        public ApplyHostWebStyle = () => {
            var scriptbase = this.GetAppWebUrl() + '/_layouts/15/';
            var stylesheetTag = document.createElement("link");
            stylesheetTag.setAttribute("rel", "stylesheet");
            stylesheetTag.setAttribute("href", scriptbase + "defaultcss.ashx?ctag=" + this.GetClientTagToken());
            var headTag = document.getElementsByTagName("head");
            headTag[0].appendChild(stylesheetTag);
        }
    }
}