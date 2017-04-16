(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.message = ""
	$scope.lunchList = ""

	$scope.buttonPressed = function(){
		
		if($scope.lunchList == ""){	
			$scope.message = "Please enter data first"
			return;
		}

		var lunchList = $scope.lunchList.split(",");
		var lunchListSize = lunchList.length;
		if(lunchListSize > 0 && lunchListSize < 4){
			$scope.message = "Enjoy!"
		} else {
			$scope.message = "Too much!"
		}
	}

	
}

})()