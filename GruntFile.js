module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            controllers: {
                files: ['app/**/*.controller.js'],
                tasks: ['uglify:controllers']
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
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
};