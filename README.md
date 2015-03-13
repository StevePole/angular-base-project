# angular-base-project
A base project for AngularJS projects with common dependencies

This base project demonstrates a simple app using AngularJS, Bootstrap, LESS.  

The example controllers, services, filters and directives follow the style guide located at:
https://github.com/johnpapa/angular-styleguide

The project includes a package.json and bower.json, once downloaded...
* Execute 'bower install' within the project root directory to install js and css dependencies using bower into the public facing components directory
* Execute 'npm install' within the project root directory to install build dependencies through npm.
* Execute 'grunt' to build the project

The included GruntFile is setup to:
* lint your Javascript with jsHint.
* build public facing minifed versions of your Javascript with uglify.
* compile any LESS (or css) files to a single minified CSS.
* execute your unit tests using jasmine and karma.
* calculate code coverage with karma-coverage.
* setup watches to recompile js and css as you save updates to files

As you extend the project it is important:
* All controllers are named *.controller.js
* All services are named *.service.js
* All filters are named *.filter.js
* All directives are named *.directive.js

The build file uses these naming conventions to locate and build your dependencies appropriately
