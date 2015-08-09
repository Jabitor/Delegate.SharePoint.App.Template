module $rootnamespace$.Home {
    export class HomeCtrl {
        // Unfortunatly angular cannot guess which constructor variables we want.
        // Therefore we can use the static $inject variable, to push in the correct parameters.
        // This is also due to the fact, that minifying programs will minify/shorten parameter names.
        public static $inject = [
            '$scope'
        ];

        // By making the constructor variables private or public, 
        // they will automaticly be available on the "this" object.
        // It's the same as doing: 
        // private scope: IHomeCtrlScope;
        // constructor($scope: IHomeCtrlScope) { this.scope = $scope; }
        constructor(private $scope: IHomeCtrlScope) {
            this.setupScope();           
        }

        // Hooks up the different $scope events/functions/variables
        private setupScope = () => {

        }
    }
}