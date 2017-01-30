myAppModule.controller('NewQuestionController', function(NewQuestionFactory, $scope, $location, $localStorage, $routeParams) {

	$scope.cancelQues = function() {
		console.log("Question to be added was canceled!");
		$location.url('/scoreboard');
	}

	$scope.addQues = function() {
		NewQuestionFactory.addNewQues($scope.newQues, function(data){
			console.log("in NewQuestionController addNewQues method");
			console.log("data is: ", data);
			$location.url('/scoreboard');
		});
	}

})