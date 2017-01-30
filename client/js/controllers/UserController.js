myAppModule.controller('UserController', function(UserFactory, $scope, $location, $routeParams, $localStorage) {

	$scope.loginUser = function() {
		console.log("in UserController, $scope.newUser is: ", $scope.newUser);
		$localStorage.User = {};
		UserFactory.LoginUser($scope.newUser, function(data){
			// console.log(data);
			if (Array.isArray(data)) {
				$localStorage.User = data[0];
				console.log("this is data, index 0: ", data[0]);
			} else {
				$localStorage.User = data;
				console.log("this is object data: ", data);
			}

			console.log("in UserController, loginUser method");
			// console.log("this is data: ", data);
			console.log("localStorage.User.user_name: ",$localStorage.User.user_name);
			$location.url('/scoreboard');
		});
		
	};
	$scope.newUser = "";



})