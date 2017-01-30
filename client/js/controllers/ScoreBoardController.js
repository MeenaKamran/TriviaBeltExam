myAppModule.controller('ScoreBoardController', function(ScoreBoardFactory, NewQuestionFactory, UserFactory, $scope, $location, $localStorage, $routeParams) {
	
	$scope.userName = $localStorage.User.user_name;
	

	$scope.logout = function() {
		console.log("in logout function");
		$localStorage.User = {};
		$location.url('/')
	}

	$scope.playTrivia = function() {
		$location.url('/lets_play');
		
	}

	UserFactory.get_all_users(function(data){
		$scope.users = data;
	})

})