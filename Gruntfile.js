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
						dest: 'bin/lib/_jquery'
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
	});

	grunt.registerTask('default', [
		'copy',
		'includeSource'
	]);

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-include-source');

}
