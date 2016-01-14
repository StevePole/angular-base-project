(function() {
    //'use strict';

    angular
        .module('my-application.directives')
        .directive('myDirective', myDirective);

    function myDirective() {
        return {
            restrict: 'E',
            scope: {
                model: "=ngModel"
            },
            controller: [
                myDirectiveController
            ],
            controllerAs: "vm",
            bindToController: true,
            templateUrl: "templates/my-directive.html"
        };
    }

    function myDirectiveController() {
        var vm = this;
        vm.test = "Directive";
    }
})();
