module $rootnamespace$ {
    'use strict';

    // Note that the service is NOT prefixed with $, 
    // $ is only recommended for native angular js providers etc
    export class AppService implements IAppService {
        constructor() { }

        /** 
        * Returns the value of a specific url parameter 
        *
        * @param paramKey The key to look for in the URL, that contains the desired value
        */
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

        /** Get's the host web url, from the URL */
        public GetHostWebUrl = (): string => {
            return decodeURIComponent(this.GetQueryStringParameter("SPHostUrl"));
        }

        /** Get's the app web url, from the URL */
        public GetAppWebUrl = (): string => {
            return decodeURIComponent(this.GetQueryStringParameter("SPAppWebUrl"));
        }

        /** Get's the Client Tag, from the URL */
        public GetClientTagToken = (): string => {
            return decodeURIComponent(this.GetQueryStringParameter("SPClientTag"));
        }

        /** Appends the host web stylesheet to the head tag */
        public ApplyHostWebStyle = () => {
            var baseUrl = this.GetHostWebUrl() + '/_layouts/15/';
            var stylesheetTag = document.createElement("link");
            stylesheetTag.setAttribute("rel", "stylesheet");
            stylesheetTag.setAttribute("href", baseUrl + "defaultcss.ashx?ctag=" + this.GetClientTagToken());
            var headTag = document.getElementsByTagName("head");
            headTag[0].appendChild(stylesheetTag);
        }
        
        /**
        * Gets the current SharePoint culture
        * e.g. "en-US", "da-DK" etc.
        */
        public GetCurrentCulture = () => {
            return decodeURIComponent(this.GetQueryStringParameter('SPLanguage'));
        }

        // Implementation of the provider factory
        public $get = (): IAppServiceProvider => {
            return {
                ApplyHostWebStyle: this.ApplyHostWebStyle,
                GetClientTagToken: this.GetClientTagToken,
                GetAppWebUrl: this.GetAppWebUrl,
                GetHostWebUrl: this.GetHostWebUrl,
                GetQueryStringParameter: this.GetQueryStringParameter,
                GetCurrentCulture: this.GetCurrentCulture
            }
        }
    }
}