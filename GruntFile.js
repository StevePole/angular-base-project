module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            controllers: {
                files: ['app/**/*.controller.js'],
                tasks: ['uglify:controllers', 'jshint']
            },
            services: {
                files: ['app/**/*.service.js'],
                tasks: ['uglify:services']
            },
            filters: {
                files: ['app/**/*.filter.js'],
                tasks: ['uglify:filters']
            },
            directives: {
                files: ['app/**/*.directive.js'],
                tasks: ['uglify:directives']
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: true,
                beautify: false
            },
            controllers: {
                src: ['app/**/*.controller.js'],
                dest: 'app/controllers.min.js'
            },
            services: {
                src: ['app/**/*.service.js'],
                dest: 'app/services.min.js'
            },
            filters: {
                src: ['app/**/*.filter.js'],
                dest: 'app/filters.min.js'
            },
            directives: {
                src: ['app/**/*.directive.js'],
                dest: 'app/directives.min.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
					console: true
				},
				'-W099': true, // allow mix tabs and spaces
				'-W014': true, // allow ++
				'-W043': true, // parseInt without radix parameter
				'-W065': true  // allow \n for line endings
            },
            files: [
                'app/**/*.controller.js',
                'app/**/*.service.js',
                'app/**/*.filter.js',
                'app/**/*.directive.js'
            ]
        },
        karma: {
            options: {
                background: true,
                browsers: ['PhantomJS']
            },
            continuous: {
                singleRun: true,
                browsers: ['PhantomJS']
            },
            files: ['app/**/*.*.spec.js']
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'karma', 'uglify', 'watch']);
};