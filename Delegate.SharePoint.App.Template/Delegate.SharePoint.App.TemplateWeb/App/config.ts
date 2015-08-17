module $rootnamespace$ {
    export class Config {
        static $inject = [
            //'$routeProvider',
            '$translateProvider',
            'AppServiceProvider'
        ];

        constructor(
            //private $routeProvider: ng.route.IRouteProvider,
            private $translateProvider: ng.translate.ITranslateProvider,
            private AppServiceProvider: IAppServiceProvider
            ) {
            this.setRoutes();
            this.setTranslations();
        }

        // Routing in the app (:
        private setRoutes = () => {

        }

        // Supported languages
        private supportedLanguages = {
            danish: 'da',
            english: 'en'
        }
        private setTranslations = () => {
            // Note that this could also be stored as seperate files, and called async
            // But for simplicity, the files will be included into the minified version of the script
            // When using the async method, I'd recommend enabling localStorage (this.$translateProvider.useLocalStorage();)
            this.$translateProvider.translations(this.supportedLanguages.english, Resources.English);
            this.$translateProvider.translations(this.supportedLanguages.danish, Resources.Danish);
            
            this.$translateProvider.preferredLanguage(this.getPreferredLanguage());
        }

        // Returns the preferred language of this app
        // Will be either the SPLanguage or default to english, depending on whether we support the given language
        private getPreferredLanguage = () => {
            var preferredLanguage = this.AppServiceProvider.GetCurrentCulture().toLowerCase().split('-')[0];
            // If we don't have a translation set up for the current culture, let's use en-US
            var hasLanguage = false;
            for (var lang in this.supportedLanguages) {
                if (this.supportedLanguages[lang] != preferredLanguage) {
                    continue;
                }

                hasLanguage = true;
                break;
            }

            if (!hasLanguage) {
                preferredLanguage = this.supportedLanguages.english;
            }

            return preferredLanguage;
        }
    }
}