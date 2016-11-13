(function() {
	'use strict';
	angular.module('pagespeedApp').factory('pagespeedApi', pagespeedApi);

	pagespeedApi.$inject = ['$http'];

	function pagespeedApi($http) {
		var endpoint = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed';
		var options = {
			key: ''
		};
		var cache = {};

		var service = {
			cache: cache,
			endpoint: endpoint,
			options: options,
			get: get,
			run: run
		};

		return service;

		function get(url) {
			var host = new URL(url).host;
			return service.cache[host] ? Promise.resolve(service.cache[host]) : service.run(url);
		}

		function run(url) {
			var params = {
				url: url,
				key: service.options.key
			};

			return $http.get(service.endpoint, {
				params: params
			}).then(cacheResponse(url));
		}

		function cacheResponse(url) {
			return function(data) {
				var requestHost = new URL(url).host;
				var resolveHost = new URL(data.data.id).host;

				service.cache[resolveHost] = data;

				if (requestHost != resolveHost) {
					service.cache[requestHost] = data;
				}

				return data;
			};
		}
	}
})();
