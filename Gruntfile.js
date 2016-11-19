'use strict';

module.exports = GruntConfig;

function GruntConfig(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			main: {
				files: [

					// Our stuff
					{
						src: [
							'**/*.html',
							'js/**'
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
		}
	});

	grunt.registerTask('default', [
		'copy',
		'ngtemplates',
		'includeSource'
	]);

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-include-source');
	grunt.loadNpmTasks('grunt-angular-templates');

}
