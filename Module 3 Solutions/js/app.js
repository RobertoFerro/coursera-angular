(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownControllerImplementation)
.service('MenuSearchService',MenuSearchServiceImplementation)
.directive('foundItems',FoundItemsDirectiveImplementation)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirectiveImplementation(){
  var ddo = {
    templateUrl: 'menuList.html',
    scope: {
      itemsOnMenu: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

NarrowItDownControllerImplementation.$inject = ['MenuSearchService'];
function NarrowItDownControllerImplementation(MenuSearchService){
  var menuController = this;
  menuController.searchTerm = "";
  menuController.searchMenu = function(){
    var promise = MenuSearchService.getMatchedMenuItems(menuController.searchTerm)
    promise.then(function (response) {
      menuController.found = response;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong with the service call");
    });
  }

  menuController.removeItem = function(itemIndex){
    menuController.found.splice(itemIndex, 1);
  }
}


MenuSearchServiceImplementation.$inject = ['$http','ApiBasePath'];
function MenuSearchServiceImplementation($http, ApiBasePath){
	var service = this;
  service.getMatchedMenuItems = function(searchTerm){
      return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json"),
      }).then(function (result){
          var foundItems = [];

          if(searchTerm === ""){
            return foundItems
          }

          for(var index = 0; index < result.data.menu_items.length; index++){
              var menuItem = result.data.menu_items[index];
              var menuItemDescripton = menuItem.description;
              if (menuItemDescripton.toLowerCase().indexOf(searchTerm) !== -1) {
                foundItems.push(menuItem);
              }
          }
          return foundItems;
      });
  }
}

})()