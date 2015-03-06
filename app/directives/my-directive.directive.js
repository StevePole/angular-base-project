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
            controller: function($scope) {
                var vm = this;
                vm.test = "Directive";
            },
            controllerAs: "vm",
            template: "<p>Rendered by {{vm.test}}</p>"
        };
    }
})();