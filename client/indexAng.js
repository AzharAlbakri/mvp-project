

var app = angular.module('phone', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.search = function() {
		console.log("hiii")
		var obj = {};
obj.Brand = $scope.Brand
obj.Price = [JSON.parse($scope.minPrice),JSON.parse($scope.maxPrice)]
 $http.post("/filter",obj)
    .then(function(response) {
        // $scope.myWelcome = response.data;
        console.log(response.data)

        $scope.phones = response.data;
    });
	};


});