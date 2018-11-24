

var app = angular.module('phone', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.search = function() {
		console.log("hiii")
	};
    $scope.Brand = "Brand";
    $scope.minPrice = "minPrice";
    $scope.maxPrice = "maxPrice";

$http({
  url: '/filter',
  method: 'POST',
 
});


});