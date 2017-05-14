(function() {
'use strict';

angular.module('private')
.config(routeConfig);

routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  
  $stateProvider
    .state('private', {
      abstract: true,
      templateUrl: 'src/private/presentation/private.html'
    })
    .state('private.signup', {
      url: '/signup',
      templateUrl: 'src/private/presentation/signup.html',
      controller:'SignUpController',
      controllerAs:'signUpCtrl'
    })
    .state('private.myinfo',{
      url: '/myinfo',
      templateUrl: 'src/private/presentation/myinfo.html',
      controller:'MyInfoController',
      controllerAs:'myInfoCtrl'
    })
}
})();
