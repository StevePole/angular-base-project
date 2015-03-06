(function() {
    'use strict';
    
    angular
        .module('my-application.filters')
        .filter('myFilter', myFilter);

    function myFilter() {
        return function(input) {
            return input.toUpperCase();
        };
    }
})();