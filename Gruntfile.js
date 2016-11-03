'use strict';

module.exports = GruntConfig;

function GruntConfig(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			main: {
				src: [
					'**/*.html',
					'js/**'
				],
				expand: true,
				cwd: 'src',
				dest: 'bin'
			}
		}
	});

	grunt.registerTask('default', ['copy']);

	grunt.loadNpmTasks('grunt-contrib-copy');

}
