'use strict';

module.exports = function (grunt) {


    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
      app:  'app',
      build: '.tmp/js'
    };

    // Configure grunt here    
    grunt.initConfig({

        config: appConfig,

    	ts: {
            // A specific target
    	    build: {
                // The source TypeScript files, http://gruntjs.com/configuring-tasks#files
                src: ["<%= config.app %>/**/*.ts", "typings/tsd.d.ts"],
                // The source html files, https://github.com/grunt-ts/grunt-ts#html-2-typescript-support
                html: ["<%= config.app %>/partials/**/*.html"],
                // If specified, generate this file that to can use for reference management
                reference: "<%= config.app %>/reference.ts",  
                // If specified, generate an out.js file which is the merged js file
                out: '<%= config.build %>/out.js'
    	    }
    	},

        // Watches files for changes and runs tasks based on the changed files
        watch: {
          TS: {
            files: ['<%= config.app %>/**/*.ts'],
            tasks: ['ts:build']
          },
          livereload: {
            options: {
              livereload: '<%= connect.options.livereload %>'
            },
            files: [
              "<%= config.app %>/**/*.html",
              "<%= config.app %>/**/*.ts"
            ]
          }
        },

        // The actual grunt server settings
        connect: {

          options: {
            port: 9000,
            hostname: 'localhost',
            livereload: 35729
          },

          livereload: {
            options: {
              open: {
                target: 'http://localhost:9000/'
              },
              middleware: function (connect) {
                return [
                  connect.static('.tmp'),
                  connect().use(
                    '/bower_components',
                    connect.static('./bower_components')
                  ),
                  connect.static(appConfig.app)
                ];
              }
            }
          }

        }
    });


    grunt.registerTask('serve', 'Compile then start a connect web server', function () {
        grunt.task.run([
            'ts:build',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
      grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
      grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask("default", ["ts:build"]);
}