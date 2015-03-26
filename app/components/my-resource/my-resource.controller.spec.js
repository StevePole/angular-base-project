describe('Controller: MyResourceController', function() {
    var controller, $rootScope, MyResourceService;
    
    beforeEach(function() {
        // Load the necessary module
        module('my-application');
        module('my-application.controllers');
        module('my-application.services');
        module('my-application.mocks');
        
        // Override objects passed by dependency injection $provider
        // (this must be done before we start using inject)
        module('my-application', function($provide) {
            $provide.value('$routeParams', {id: 1});
            
            // Ideally we would override services with our pre-written mocks
            // However, we cannot use inject to get the mock until later
        });
        
        // underscores in service names are ignored, they let us use the 
        // original name for local variables.
        inject(function($controller, _MyResourceServiceMock_, _$rootScope_) {
            // Retain a reference to the rootScope so we can trigger a digest 
            // cycle to resolve promises.
            $rootScope = _$rootScope_;
            
            // Retain a reference to the mock service so we can spy on it later
            MyResourceService = _MyResourceServiceMock_;
            
            // Use the controller service to instantiate our controller
            // DI works as normal, but we must pass our mock service explicitly
            controller = $controller('MyResourceController', {
                MyResourceService: _MyResourceServiceMock_
            });
        });
    });

    describe('init()', function() {
        it("should call the resource service and load a resource", function() {
            // spyOn replaces the method, callThrough returns the original response
            spyOn(MyResourceService, 'get').and.callThrough();
            
            controller.init();
            
            expect(MyResourceService.get).toHaveBeenCalled();
            expect(MyResourceService.get).toHaveBeenCalledWith(1);
            
            // Force a digest cycle on the rootScope to resolve promises.
            $rootScope.$apply();
            
            expect(controller.resource.id).toBe(1);
            expect(controller.resource.name).toBe("Mock!");
        });
    });
    
    describe('save()', function() {
        it("should call the service and save a resource", function() {
            // spyOn replaces the method, callThrough returns the original response
            spyOn(MyResourceService, 'save').and.callThrough();
            
            controller.save();
            
            expect(MyResourceService.save).toHaveBeenCalled();
            
            // Force a digest cycle on the rootScope to resolve promises.
            $rootScope.$apply();
            
            expect(controller.resource.id).toBe(1);
            expect(controller.resource.name).toBe("Mock!");
        });
    });
});