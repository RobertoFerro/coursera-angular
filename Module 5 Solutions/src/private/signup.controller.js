(function () {
"use strict";

angular.module('private')
.controller('SignUpController', SignUpController)
.controller('MyInfoController',MyInfoController);

SignUpController.$inject = ['shortNameService','userService'];
function SignUpController(shortNameService, userService) {
  var ctrl = this;
  ctrl.isMenuNumberValid = false;
  ctrl.isUserAdded = false;
 
  ctrl.submit = function(){
  	shortNameService.getShortName(ctrl.menuNumber)
  		.success(function (menuItem) {
            
            var user = {
            	firstname: ctrl.firstName,
            	lastname: ctrl.lastName,
            	phone: ctrl.phoneNumber,
            	email: ctrl.emailAddress,
            	menuItem: menuItem
            }

            userService.addUser(user);
            ctrl.isUserAdded = true;

        })
        .error(function (error) {
            ctrl.isMenuNumberValid = true;
            
        });
  }
}


MyInfoController.$inject = ['userService'];
function MyInfoController(userService){

	var ctrl = this;
	ctrl.user = userService.getUser();
	ctrl.hasUser = false;

	 if(ctrl.user){
	 	ctrl.hasUser = true
	 }


}

})();
