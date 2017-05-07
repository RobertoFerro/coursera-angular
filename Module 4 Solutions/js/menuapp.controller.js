(function () {
'use strict';


angular.module('MenuApp')
.controller('CategoriesController',CategoriesController)
.controller('ItemController',ItemController);

CategoriesController.$inject = ['categories'];
function CategoriesController(categories){
	var mainList = this;
	mainList.items = categories;
}

ItemController.$inject = ['menuItems'];
function ItemController(menuItems){
	var itemDetail = this;
	itemDetail.menuItems = menuItems;
}

})();