(function() {
	'use strict';
	angular.module('pagespeedApp').controller('pagespeedQueryFormController', pagespeedQueryForm);

	pagespeedQueryForm.$inject = ['pagespeedApi'];

	function pagespeedQueryForm(pagespeedApi) {
		var vm = this;

		vm.url = '';
		vm.submit = submit;
		vm.canNotSubmit = canNotSubmit;

		function submit() {
			pagespeedApi.run(vm.url);
		}

		function canNotSubmit() {
			// On chrome since input[type=url] remains undefined unless value is actually a valid URL
			return !vm.url; // FIXME also check if API key is set
		}
	}
})();
