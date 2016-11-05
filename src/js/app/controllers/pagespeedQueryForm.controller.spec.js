describe('Pagespeed Query Form Controller', function() {
	var pagespeedQueryFormController;

	beforeEach(module('pagespeedApp'));
	beforeEach(inject(function ($controller) {
		pagespeedQueryFormController = $controller('pagespeedQueryFormController', {});
	}));

	it('Should start with an empty form', function() {
		expect(pagespeedQueryFormController.url).toBe('');
	});

	it('Should have a submit function', function() {
		expect(pagespeedQueryFormController.submit).toBeDefined();
	});
});
