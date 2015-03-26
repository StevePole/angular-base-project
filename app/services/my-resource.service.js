(function() {
    'use strict';
    
    angular
        .module('my-application.services')
        .service('MyResourceService', MyResourceService);

    MyResourceService.$inject = ['$q', '$http'];

    function MyResourceService($q, $http) {
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
            return $http.get("app/json/my-resources.json").then(function(resources) {
                return resources.data;
            });
        }
        function save(resource) {
            console.log("saving! " + resource.name);
            var deferred = $q.defer();
            deferred.resolve({data: resource});
            return deferred.promise;
        }
    }
})();