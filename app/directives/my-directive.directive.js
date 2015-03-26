(function() {
    'use strict';
    
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
                '$scope', 
                myDirectiveController
            ],
            controllerAs: "vm",
            bindToController: true,
            template: "<p>Rendered by {{vm.test}}</p>"
        };
    }
    
    function myDirectiveController($scope) {
        var vm = this;
        vm.test = "Directive";
    }
})();