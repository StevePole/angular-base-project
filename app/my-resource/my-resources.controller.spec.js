describe('Controller: MyResourceController', function() {
    var controller, $rootScope, MyResourceService;
    
    beforeEach(function() {
        // Load the necessary module
        module('my-application');
        module('my-application.controllers');
        module('my-application.services');
        module('my-application.mocks');
        
        // underscores in service names are ignored, they let us use the 
        // original name for local variables.
        inject(function($controller, _MyResourceServiceMock_, _$rootScope_) {
            // Retain rootScope to trigger digest and resolve promises.
            $rootScope = _$rootScope_;
            
            // Retain a reference to the mock service so we can spy on it later
            MyResourceService = _MyResourceServiceMock_;
            
            // Use the controller service to instantiate our controller, pass mock
            controller = $controller('MyResourcesController', {
                MyResourceService: _MyResourceServiceMock_
            });
        });
    });

    describe('init()', function() {
        it("should call the resource service and list the resources", function() {
            // spyOn replaces the method, callThrough returns the original response
            spyOn(MyResourceService, 'list').and.callThrough();
            
            controller.init();
            
            expect(MyResourceService.list).toHaveBeenCalled();
            
            // Force a digest cycle on the rootScope to resolve promises.
            $rootScope.$apply();
            
            expect(controller.resources).toBeDefined();
            expect(controller.resources.length).toBe(2);
            
            var resource = controller.resources[0];
            expect(resource.id).toBe(1);
            expect(resource.name).toBe("Mock!");
            
            resource = controller.resources[1];
            expect(resource.id).toBe(2);
            expect(resource.name).toBe("Another mock?");
        });
    });
});