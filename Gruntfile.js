'use strict';

module.exports = GruntConfig;

function GruntConfig(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			options: {
				sourceMap: true
			},
			js: {
				src: [
					'src/js/**/*module.js',
					'src/js/**/*service.js',
					'src/js/**/*filter.js',
					'src/js/**/*controller.js',
					'src/js/**/*directive.js',
					//'src/js/**/*.js',
					'!**/*.spec.js'
				],
				dest: 'bin/js/app/<%= pkg.name %>-<%= pkg.version %>.js'
			}
		},

		copy: {
			main: {
				files: [

					// Our stuff
					{
						src: [
							'**/*.html',
							//'js/**'
						],
						expand: true,
						cwd: 'src',
						dest: 'bin'
					},

					// Angular
					{
						src: [
							'angular.min.js*'
						],
						expand: true,
						cwd: 'node_modules/angular',
						dest: 'bin/lib/angular'
					},

					// jQuery
					{
						src: [
							'jquery.min.js*'
						],
						expand: true,
						cwd: 'node_modules/jquery/dist',
						dest: 'bin/lib/_jquery' // '_' is a hack to get jQuery to load before Bootstrap JS
					},

					// Bootstrap
					{
						src: [
							'css/bootstrap.min.css*',
							'js/bootstrap.min.js*',
							'fonts/**'
						],
						expand: true,
						cwd: 'node_modules/bootstrap/dist',
						dest: 'bin/lib/bootstrap'
					}
				]
			}
		},

		includeSource: {
			options: {
				basePath: 'bin/',
				baseUrl: './'
			},
			angular: {
				files: {
					'bin/index.html': 'bin/index.html'
				}
			}
		},

		ngtemplates:  {
			app:        {
				src:      'src/js/**/*.html',
				dest:     'bin/js/app/pagespeed.templates.module.js',
				options:  {
					module: 'pagespeed.templates',
					standalone: true,
					url: function(url) {
						return url.replace('src/', '');
					}
				}
			}
		},

		uglify: {
			options: {
				sourceMap: true
			},
			prod: {
				files: {
					'bin/js/app/<%= pkg.name %>-<%= pkg.version %>.min.js': [
						'bin/js/app/<%= pkg.name %>-<%= pkg.version %>.js'
					]
				}
			}
		}
	});

	grunt.registerTask('default', [
		'concat',
		'copy',
		'ngtemplates',
		'uglify',
		'includeSource'
	]);

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-include-source');
	grunt.loadNpmTasks('grunt-angular-templates');

}
