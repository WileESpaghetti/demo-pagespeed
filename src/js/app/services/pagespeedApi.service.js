(function() {
	'use strict';
	angular.module('pagespeedApp').factory('pagespeedApi', pagespeedApi);

	pagespeedApi.$inject = ['$http'];

	function pagespeedApi($http) {
		var endpoint = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed';
		var options = {
			key: ''
		};

		var service = {
			endpoint: endpoint,
			options: options,
			run: run
		};

		return service;

		function run(url, mobile, screenshot) {
			alert(url)
		}
	}
})();
