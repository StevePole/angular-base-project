
angular.module('my-application.controllers', []);
angular.module('my-application.services', []);
angular.module('my-application.directives', []);
angular.module('my-application.filters', []);

angular.module('my-application', [
    'ngRoute',
    'my-application.controllers',
    'my-application.directives',
    'my-application.filters',
    'my-application.services'
]);

// route-config.js
angular
    .module('my-application')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/my-resource', {
            templateUrl: 'app/my-resource/my-resource.html',
            controller: 'MyResourceController',
            controllerAs: 'vm'
        })
        .when('/my-resource/:id', {
            templateUrl: 'app/my-resource/my-resource.html',
            controller: 'MyResourceController',
            controllerAs: 'vm'
        }).
        otherwise({
          redirectTo: '/my-resource'
        });
}