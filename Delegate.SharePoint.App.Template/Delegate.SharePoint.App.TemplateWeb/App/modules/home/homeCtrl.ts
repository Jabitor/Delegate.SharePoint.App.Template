module $rootnamespace$.Home {
    'use strict';

    export class HomeCtrl {
        // Unfortunatly angular cannot guess which constructor variables we want.
        // Therefore we can use the static $inject variable, to push in the correct parameters.
        // This is also due to the fact, that minifying programs will minify/shorten parameter names.
        public static $inject = [
            '$scope',
            'AppService'
        ];

        // By making the constructor variables private or public, 
        // they will automaticly be available on the "this" object.
        // It's the same as doing: 
        // private scope: IHomeCtrlScope;
        // constructor($scope: IHomeCtrlScope) { this.scope = $scope; } (except it will now be this.$scope)
        constructor(private $scope: IHomeCtrlScope, private AppService: AppService) {
            // Some prefer using "$scope.vm = this;" here
            // That approach will save you the explicit binding of each function called from the UI 
            // I prefer setting it up explicitly, thus also not exposing the entire class
            this.setupScope();
        }

        // Hooks up the different $scope events/functions/variables
        private setupScope = () => {
            
        }
    }
}