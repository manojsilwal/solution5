	angular.module('public')
	.service('registerService',registerService)

	registerService.$inject = ['$http', 'ApiPath'];
	function registerService($http, ApiPath) {
	  var service = this;
	  service.user = {};
	   service.getMenuItem = function (short_name) {
	    return $http
	    .get(ApiPath + '/menu_items/'+short_name+'.json')
	    .then(function (response) {
	      return response.data;
	    });
	  }

	  service.setUser = function(user,item){
	  	var newUser = {
	  		user : user,
	  		item : item
	  	}
	  	service.user = newUser;
	  }

	  service.getUser = function(){
	  	return service.user;
	  }

	  service.setItem = function(item){
	  	service.item = item;
	  }

	  service.getItem = function(){
	  	return service.item;
	  }

	 }
