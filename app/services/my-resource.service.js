(function() {
    'use strict';
    
    angular
        .module('my-application.services')
        .service('MyResourceService', MyResourceService);

    MyResourceService.$inject = ['$q', '$http', '$timeout'];

    function MyResourceService($q, $http, $timeout) {
        var self = this;
        self.get = get;
        self.list = list;
        self.save = save;
        
        function get(id) {
            return self.list().then(function(resources) {
                var resource = resources[0];
                angular.forEach(resources, function(resourceIter) {
                    if (id === resourceIter.id) {
                        resource = resourceIter;
                    }
                });
                return resource;
            });
        }
        function list() {
            return $http.get("json/my-resources.json").then(function(resources) {
                return resources.data;
            });
        }
        function save(resource) {
            console.log("saving! " + resource.name);
            var deferred = $q.defer();
            $timeout(function() {
                deferred.resolve({data: resource});
            }, 2000);
            return deferred.promise;
        }
    }
})();