(function() {
	angular.module('public')
	.controller('registerController',registerController);

	registerController.$inject=['registerService'];
	function registerController(registerService){
		var ctrl = this;
		ctrl.user = {};
		var item = {};
		ctrl.submit = function(){
			console.log(ctrl.user.fav_item);
			var promise = registerService.getMenuItem(ctrl.user.fav_item);
			promise.then(function(result){
				ctrl.error = false;
				ctrl.saved = true;
				registerService.setUser(ctrl.user,result);
			})
			.catch(function(error){
					ctrl.saved = false;
					ctrl.error = true;
			});

		}
	}

})();