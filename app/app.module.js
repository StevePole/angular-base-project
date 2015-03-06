
angular.module('my-application', [
    'ngRoute',
    'my-application.controllers',
    //'my-application.filters',
    //'my-application.directives',
    'my-application.services'
]);

// route-config.js
angular
    .module('my-application')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/my-resource', {
            templateUrl: 'my-resource.html',
            controller: 'MyResource',
            controllerAs: 'vm'
        })
        .when('/my-resource/:id', {
            templateUrl: 'my-resource.html',
            controller: 'MyResource',
            controllerAs: 'vm'
        });
}