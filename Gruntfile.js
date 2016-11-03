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
		}
	});

	grunt.registerTask('default', ['copy']);

	grunt.loadNpmTasks('grunt-contrib-copy');

}
