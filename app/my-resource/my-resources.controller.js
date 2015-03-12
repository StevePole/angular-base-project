(function() {
    'use strict';
    
    angular
        .module('my-application.controllers')
        .controller('MyResourcesController', MyResourcesController);

    MyResourcesController.$inject = ['MyResourceService'];

    function MyResourcesController(MyResourceService) {
        var vm = this;
        vm.init = init;
        vm.resources = [];
        
        function init() {
            MyResourceService.list()
                .then(function(resources) {
                    vm.resources = resources;
                    return resources;
                });
        }
        
        init();
    }
})();