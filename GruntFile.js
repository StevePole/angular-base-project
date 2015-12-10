module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['app/**/*.css', 'app/**/*.less'],
                tasks: ['less:development', 'less:production']
            },
            controllers: {
                files: ['app/**/*.controller.js'],
                tasks: ['uglify:controllers', 'jshint']
            },
            services: {
                files: ['app/**/*.service.js'],
                tasks: ['uglify:services', 'jshint']
            },
            filters: {
                files: ['app/**/*.filter.js'],
                tasks: ['uglify:filters', 'jshint']
            },
            directives: {
                files: ['app/**/*.directive.js'],
                tasks: ['uglify:directives', 'jshint']
            },
            modules: {
                files: ['app/**/*.module.js'],
                dest: 'public/js/modules.min.js'
            }
        },
        uglify: {
            options: {
                mangle: false,
                beautify: true
            },
            controllers: {
                src: ['app/**/*.controller.js'],
                dest: 'public/js/controllers.min.js'
            },
            services: {
                src: ['app/**/*.service.js'],
                dest: 'public/js/services.min.js'
            },
            filters: {
                src: ['app/**/*.filter.js'],
                dest: 'public/js/filters.min.js'
            },
            directives: {
                src: ['app/**/*.directive.js'],
                dest: 'public/js/directives.min.js'
            },
            modules: {
                src: ['app/**/*.module.js'],
                dest: 'public/js/modules.min.js'
            }
        },
        less: {
            development: {
                options: {
                    paths: ["app"]
                },
                files: {
                    "public/css/styles.css": ["app/**/*.css", "app/**/*.less"]
                }
            },
            production: {
                options: {
                    paths: ["app"],
                    compress: true
                },
                files: {
                    "public/css/styles.min.css": ["app/**/*.css", "app/**/*.less"]
                }
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
                configFile: 'karma-conf.js'
            },
            unit: {
                singleRun: true
            }
        },
        copy: {
            templates: {
                expand: true,
                flatten: true,  // flattens results to a single level
                src: ['app/**/*.html'],
                dest: 'public/templates/',
                filter: 'isFile'
            },
            json: {
                expand: true,
                flatten: true,  // flattens results to a single level
                src: ['app/**/*.json'],
                dest: 'public/json/',
                filter: 'isFile'
            }
        }
    });

    // Load plugins.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'karma', 'copy', 'uglify', 'less', 'watch']);
};
