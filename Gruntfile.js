module.exports = function (grunt) {

    // load the task
    grunt.loadNpmTasks("grunt-ts");

    // Configure grunt here
    
    grunt.initConfig({
    	ts: {
    	        // A specific target
    	        build: {
    	            // The source TypeScript files, http://gruntjs.com/configuring-tasks#files
    	            src: ["app/**/*.ts", "typings/tsd.d.ts"],
    	            // The source html files, https://github.com/grunt-ts/grunt-ts#html-2-typescript-support
    	            html: ["app/**/*.html"],
    	            // If specified, generate this file that to can use for reference management
    	            reference: "app/reference.ts",  
    	            // If specified, generate an out.js file which is the merged js file
    	            out: 'build/out.js',
    	            // If specified, watches this directory for changes, and re-runs the current target
    	            watch: 'app'
    	        }
    	    }
    });

    grunt.registerTask("default", ["ts:build"]);
}