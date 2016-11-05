(function() {
	'use strict';
	angular.module('pagespeedApp', []).config(function($sceDelegateProvider) {
		$sceDelegateProvider.resourceUrlWhitelist([
			'https://www.googleapis.com/pagespeedonline/v2/runPagespeed' // TODO pull from service instead of hard coded
		]);
	});
})();