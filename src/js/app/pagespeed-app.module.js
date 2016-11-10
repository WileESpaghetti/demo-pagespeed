(function() {
	'use strict';
	angular.module('pagespeedApp', ['pagespeed.templates']).config(function($sceDelegateProvider) {
		$sceDelegateProvider.resourceUrlWhitelist([
			'self',
			'https://www.googleapis.com/pagespeedonline/v2/runPagespeed' // TODO pull from service instead of hard coded
		]);
	});
})();