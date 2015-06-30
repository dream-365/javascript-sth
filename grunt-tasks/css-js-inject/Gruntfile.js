module.exports = function (grunt) {
	grunt.initConfig({
		wiredep: {
		
		  task: {
		
		    // Point to the files that should be updated when
		    // you run `grunt wiredep`
		    src: [
		      'client/index.html',   // .html support...
		    ],
		
		    options: {
		      // See wiredep's configuration documentation for the options
		      // you may pass:
		
		      // https://github.com/taptapship/wiredep#configuration
			    onPathInjected: function(fileObject) {
				    // fileObject.block = 'type-of-wiredep-block' ('js', 'css', etc)
					// fileObject.file = 'name-of-file-that-was-updated'
				    // fileObject.path = 'path-to-file-that-was-injected'
					console.log('inject ' + fileObject.block + ' file: ' + fileObject.file);
				  },
		    }
		  }
		},
		copy: {
		  main: {
		    files: [
		      // includes files within path
		      // {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'},
		
		      // includes files within path and its sub-directories
		      // {expand: true, src: ['client/*'], dest: 'dest/public'},
		
		      // makes all src relative to cwd
		      {expand: true, cwd: 'client/', src: ['**'], dest: 'dist/public'},
		
		      // flattens results to a single level
		      // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'},
		    ],
		  },
		},
		  express: {
		    options: {
		      // Override defaults here
		    },
		    dev: {
		      options: {
		        script: 'server/app.js'
		      }
		    },
		    prod: {
		      options: {
		        script: 'path/to/prod/server.js',
		        node_env: 'production'
		      }
		    },
		    test: {
		      options: {
		        script: 'path/to/test/server.js'
		      }
		    }
		  }
	});
	
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-express-server');
};