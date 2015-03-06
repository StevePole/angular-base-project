(function() {
    'use strict';
    
    angular
        .module('my-application.controllers')
        .controller('MyResourceController', MyResourceController);

    MyResourceController.$inject = ['MyResourceService'];

    function MyResourceController(MyResourceService) {
        var vm = this;
        vm.init = init;
        vm.save = save;
        vm.resource = {};
        
        function init() {
            MyResourceService.get(1)
                .then(function(resource) {
                    vm.resource = resource;
                    return resource;
                })
                .catch(function(errors) {
                    
                });
        }
        function save() {
            MyResourceService.save(vm.resource);
        }
        
        init();
    }
})();