module.exports = function (grunt) {
	grunt.initConfig({
		wiredep: {
		
		  task: {
		
		    // Point to the files that should be updated when
		    // you run `grunt wiredep`
		    src: [
		      'index.html',   // .html support...
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
		}
	});
	
	grunt.loadNpmTasks('grunt-wiredep');
};