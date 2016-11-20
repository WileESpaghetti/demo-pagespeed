;(function() {
	'use strict';
	angular.module('pagespeedApp').factory('pagespeedApi', pagespeedApi);

	pagespeedApi.$inject = ['$http'];

	function pagespeedApi($http) {
		var endpoint = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed';
		var options = {
			key: ''
		};
		var cache = {};
		var latest = {};

		var service = {
			cache: cache,
			endpoint: endpoint,
			latest: latest,
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
			})
				.then(cacheResponse(url))
				.then(setLatest);
		}

		function cacheResponse(url) {
			return function(response) {
				var requestHost = new URL(url).host;
				var resolveHost = new URL(response.data.id).host;
				var pagespeed = response.data;

				service.cache[resolveHost] = pagespeed;

				if (requestHost != resolveHost) {
					service.cache[requestHost] = pagespeed;
				}

				return pagespeed;
			};
		}

		function setLatest(pagespeed) {
			service.latest.host = new URL(pagespeed.id).host;
			service.latest.data = pagespeed;
			return pagespeed;
		}
	}
})();
