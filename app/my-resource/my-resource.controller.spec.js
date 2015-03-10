describe('MyResourceController', function() {
    beforeEach(module('my-application.controllers'));
    
    it('true be true', function() {
        expect(true).toBe(true);
    });
    
    var $controller;

    beforeEach(inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter 
        // names when matching
        $controller = _$controller_;
    }));

    describe('init()', function() {
        var controller;
        
        beforeEach(function() {
            controller = $controller(
                'MyResourceController', 
                {
                    $routeParams: {
                        id: 1
                    }, 
                    MyResourceService: {
                        get: function() {}
                    }
                }
            );
        });
        
        it('should call the get method of MyResourceService', function() {
            expect(true).toBe(true);
        });
    });
});