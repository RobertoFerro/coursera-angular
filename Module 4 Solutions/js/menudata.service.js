(function () {
'use strict';

angular.module('data')
.service('MenuDataService',['$http',function($http) {

	var menuDataService = this;

	menuDataService.getAllCategories = function(){

		var requestAllCategories = $http({
        	method: "GET",
        	url: ("https://davids-restaurant.herokuapp.com/categories.json")
      	});
      	
      	return requestAllCategories.then(function (response) {
			    return response.data;
      	})
	}

	menuDataService.getItemsForCategory = function(categoryShortName) {

		var requestCategoryShortName = $http({
        	method: "GET",
        	url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
        	params: {
        		category: categoryShortName
        	}
      	});

      	return requestCategoryShortName.then(function (response){
      		return response.data.menu_items;
      	});
	}

}]);

})();