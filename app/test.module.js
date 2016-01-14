(function(angular) {
	testApp = angular.module('my-application.E2E', [
		'my-application',
		'ngMockE2E'
	]);

	testApp.run(function($httpBackend) {

		var myResources = [{
			"id": 1,
			"name": "Test"
		},{
			"id": 2,
			"name": "Test 2"
		}];

		var paths = {
			myResources: {
				get: 'json/my-resources.json'
			}
		}

		// Resources
		$httpBackend.whenGET(paths.myResources.get).respond(myResources);

		$httpBackend.whenGET(/^/).passThrough(); //.respond([404, {}, {}]);
	});
})(window.angular);
