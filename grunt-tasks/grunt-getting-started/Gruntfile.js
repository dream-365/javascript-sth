module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            build: ['Gruntfile.js', 'src/**/*.js']
        },
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/js/services.min.js': 'src/js/services/*.js',
                    'dist/js/controllers.min.js': ['src/js/controllers/controller1.js', 'src/js/controllers/controller2.js']
                }
            }
        },
        less: {
            build: {
                files: {
                    'src/css/pretty.css': 'src/css/pretty.less'
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'dist/css/style.min.css': 'src/css/pretty.css'
                }
            }
        },
        watch: {
            stylesheets: {
                files: ['src/css/*.css', 'src/css/*.less'],
                tasks: ['less', 'cssmin']
            },
            scripts: {
                files: 'src/js/**/*.js',
                tasks: ['jshint', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');


    grunt.registerTask('default', ['jshint', 'uglify', 'less', 'cssmin']);
};