module $rootnamespace$ {
    // Register the Angular Module
    var app = angular.module('SampleApp', []);

    // Below here, controls, services, etc. will be registered.
    // Note that the full namespace/module name is not required, but I usually do it for readability

    // Register controls 
    app.service('HomeCtrl', $rootnamespace$.Home.HomeCtrl);

    // Register services
    app.service('AppService', $rootnamespace$.AppService);  
}