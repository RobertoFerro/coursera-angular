(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyControllerImplementation)
.controller('AlreadyBoughtController',AlreadyBoughtControllerImplementation)
.service('ShoppingListCheckOffService',ShoppingListCheckOffServiceImplementation);

ToBuyControllerImplementation.$inject = ['ShoppingListCheckOffService'];
function ToBuyControllerImplementation(ShoppingListCheckOffService){
	
	var toBuyControllerScope = this;
	toBuyControllerScope.itemsToBuy = ShoppingListCheckOffService.getToBuyItems();
	toBuyControllerScope.itemBought = function(index) {
		ShoppingListCheckOffService.itemBought(index);
	}
}

AlreadyBoughtControllerImplementation.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtControllerImplementation(ShoppingListCheckOffService){
	var alreadyBoughtController = this;
	alreadyBoughtController.itemsBought = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffServiceImplementation(){
	var service = this;
	
	var toBuyItems = [{
      name: "Cookies",
      quantity: 10
    },{
      name: "Chips",
      quantity: 5
    },{
      name: "Coke",
      quantity: 2
    },{
      name: "Chocolates",
      quantity: 8
    },{
      name: "Popcorn",
      quantity: 1
    }];

	var alreadyBoughtItems = [];

	service.itemBought = function (itemIndex) {
		var itemToBeRemoved = toBuyItems[itemIndex];
    	toBuyItems.splice(itemIndex, 1);
    	alreadyBoughtItems.push(itemToBeRemoved);
  	};

  	service.getToBuyItems = function(){
    	return toBuyItems;
  	};

  	service.getBoughtItems = function(){
    	return alreadyBoughtItems;
  	}
}

})()