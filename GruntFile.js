module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false,
                beautify: true
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

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
};