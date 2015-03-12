(function() {
    'use strict';
    
    angular
        .module('my-application.controllers')
        .controller('MyResourceController', MyResourceController);

    MyResourceController.$inject = ['$routeParams', 'MyResourceService'];

    function MyResourceController($routeParams, MyResourceService) {
        var vm = this;
        vm.init = init;
        vm.save = save;
        vm.resource = {};
        
        function init() {
            var id = parseInt($routeParams.id);
            
            MyResourceService.get(id)
                .then(function(resource) {
                    console.log("log");
                    console.log(resource);
                    vm.resource = resource;
                    return resource;
                });
                //.catch(function(errors) {
                //    var a = 1;
                //});
        }
        
        function save() {
            MyResourceService.save(vm.resource);
        }
        
        init();
    }
})();