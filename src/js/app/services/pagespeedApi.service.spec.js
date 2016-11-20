'use strict';
describe('Google PageSpeed API Service', function() {
	var pagespeedApi;

	beforeEach(module('pagespeedApp'));
	beforeEach(inject(function (_pagespeedApi_) {
		pagespeedApi = _pagespeedApi_;
	}));

	describe('API Endpoint', function () {
		it('Should be whitelisted', inject(function($sce) {
			console.log($sce.getTrusted('http://srv.assets.example.com/'));
			//expect(true).toBe(false);
		}));
	});
});
