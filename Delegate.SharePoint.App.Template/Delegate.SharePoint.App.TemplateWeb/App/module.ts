module $rootnamespace$ {
    'use strict';

    // Register the Angular Module
    // 'pascalprecht.translate' is angular-translate
    var app = angular.module('TemplateApp', ['pascalprecht.translate']);

    // Below here, controls, services, etc. will be registered.
    // Note that the full namespace/module name is not required, but I usually do it for readability

    // Register controls 
    app.controller('HomeCtrl', $rootnamespace$.Home.HomeCtrl);

    // Register services
    //app.service('RngService', $rootnamespace$.RngService);

    // Register providers
    // Providers are also implemented as services, therefore the "Service" suffix.
    // Note that AngularJs will automaticly suffix providers(!!!) with "Provider" and therefore is only called "*Service"
    // When referencing the provider, the name used will be "*ServiceProvider"
    app.provider('AppService', $rootnamespace$.AppService);

    // Let's add some configuration
    app.config($rootnamespace$.Config);
}