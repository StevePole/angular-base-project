(function() {
    'use strict';
    
    angular
        .module('my-application.services')
        .service('MyResourceService', MyResourceService);

    MyResourceService.$inject = ['$q'];

    function MyResourceService($q) {
        var self = this;
        self.get = get;
        self.list = list;
        self.save = save;
        
        function get(id) {
            var deferred = $q.defer();
            deferred.resolve({
                id: id,
                name: "Hello World!"
            });
            return deferred.promise;
        };
        function list() {
            var deferred = $q.defer();
            deferred.resolve([{
                id: 1,
                name: "Hello World!"
            },{
                id: 2,
                name: "Is anybody out there?"
            }]);
            return deferred.promise;
        };
        function save(resource) {
            console.log("Saving resource...");
            var deferred = $q.defer();
            deferred.resolve(resource);
            return deferred.promise;
        };
    }
})();