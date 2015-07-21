module.exports = function(grunt) {

    // Load Grunt tasks declared in the package.json file
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Configure Grunt 
    grunt.initConfig({
        watch: {
            js: {
                files: '**/*.js',
                tasks: ['compass']
            },
            css: {
                files: '**/*.css',
                tasks: ['cssmin'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['index.html', '**/*.css'],
                options: {
                    livereload: true
                }
            }
        },
        // grunt-contrib-connect will serve the files of the project
        // on specified port and hostname
        connect: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    // Prevents Grunt to close just after the task (starting the server) completes
                    // This will be removed later as `watch` will take care of that
                    // keepalive: true,
                    middleware: function(connect, options) {

                        return [

                            // Load the middleware provided by the livereload plugin
                            // that will take care of inserting the snippet
                            require('grunt-contrib-livereload/lib/utils').livereloadSnippet,

                            // Serve the project folder
                            connect.static(options.base)
                        ];
                    }
                }
            }
        },
        // grunt-open will open your browser at the project's URL
        openbrowser: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= connect.all.options.port%>'
            }
        },

        regarde: {
            all: {
                // This'll just watch the index.html file, you could add **/*.js or **/*.css
                // to watch Javascript and CSS files too.
                files: ['www/index.html'],
                // This configures the task that will run when the file change
                tasks: ['livereload']
            }
        }
    });

    // Creates the `server` task
    grunt.registerTask('server', [
        'livereload-start',
        'connect',
        'openbrowser',
        'regarde'
    ]);
};
