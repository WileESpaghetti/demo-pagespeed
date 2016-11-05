(function() {
	'use strict';
	angular.module('pagespeedApp').controller('pagespeedQueryFormController', pagespeedQueryForm);

	pagespeedQueryForm.$inject = ['pagespeedApi'];

	function pagespeedQueryForm(pagespeedApi) {
		var vm = this;

		vm.url = '';
		vm.submit = submit;

		function submit() {
			pagespeedApi.run(vm.url);
		}
	}
})();
