(function () {
'use strict';

angular.module('MenuApp').config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'index.html'
    })


  $stateProvider
    .state('categories', {
      url: '/categories',
      templateUrl: 'presentation/categories.html',
      controller:'CategoriesController as mainList',
      resolve:{
        categories: ['MenuDataService',function (service){
          return service.getAllCategories();
        }]
      }
    })

    .state('itemsUrl', {
      url: '/items/{itemId}',
      templateUrl: 'presentation/item.html',
      controller: 'ItemController as itemDetail',
      resolve: {
        menuItems: ['$stateParams','MenuDataService',function($stateParams,service){
            return service.getItemsForCategory($stateParams.itemId);
        }]
      }
    });
}


})();
