'use strict';
module.exports = function(config) {
	config.set({

		autoWatch: true,
		basePath: 'bin/',
		browsers: ['PhantomJS'],
		colors: true,
		concurrency: Infinity,
		frameworks: ['jasmine'],
		logLevel: config.LOG_INFO,
		port: 9876,
		reporters: ['progress'],
		singleRun: true,

		files: [
			'lib/**/*.js',
			'../node_modules/angular-mocks/angular-mocks.js',
			'js/**/*.module.js',
			'js/**/*.service.js',
			'js/**/*.controller.js',
			'js/**/*.directive.js',
			'js/**/*.spec.js',
		],

		exclude: [
		],

		preprocessors: {
		}

	})
};
