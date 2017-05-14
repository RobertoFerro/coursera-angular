(function() {
'use strict';

angular.module('private')

.service('shortNameService',['$http',function($http){

	var service = this;
	service.getShortName = function(shortName){
		return $http({
        method: "GET",
        url: ("https://damp-hamlet-14078.herokuapp.com/menu_items/"+shortName+".json")
      });
	}
}])

.service('userService', function(){

	var service = this;
	service.user = null;

	service.addUser = function(user) {
		service.user = user;
	}

	service.getUser = function() {
		return service.user;
	}
})	

})();