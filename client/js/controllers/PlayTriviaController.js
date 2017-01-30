myAppModule.controller('PlayTriviaController', function(NewQuestionFactory, UserFactory, $scope, $location, $localStorage, $routeParams) {


	$scope.userName = $localStorage.User.user_name;
	var randomNumArray = [];
	var trivaQuestions = [];
	NewQuestionFactory.getAllQuestions(function(data){
		// var numOfQues = data.length;
		// var randomNum;
		// for (var i=0; i<3; i++) {
  // 			randomNum = Math.floor(Math.random() * numOfQues);
  // 			if (i==1) {
  // 				if (randomNum == randomNum)
  // 			}
  // 			console.log(randomNumArray[i]);
  // 		}
  // 		for (i=0;i<3;i++){
		// 	trivaQuestions[i] = data[randomNumArray[i]];
		// }
		data = data.sort(function() {
    		return Math.random() - .5
		});
		for (var i=0;i<3;i++){
			trivaQuestions[i] = data[i];
		}
		$scope.questions = trivaQuestions;
		console.log("$scope.questions: ", $scope.questions);
		// console.log("$scope.questions._answer: ", $scope.questions._answer)
	})

	$scope.cancelTrivia = function() {
		console.log("Playing Trivia was canceled!");
		$location.url('/scoreboard');
	}

	$scope.answers ={};
	$scope.correctCount = 0;
	$scope.submitTrivia = function() {
		$scope.correctCount = 0;
		
		
  		
		for(var i=0;i<3;i++){
			
			var answers = $scope.questions[i]._answer;
			$scope.questions[i].userAnswerCorrect = false;
  			$scope.questions[i].userAnswer = $scope.answers[i];
  			console.log("$scope.questions[i].userAnswer: ",$scope.questions[i].userAnswer);
			for (var j=0;j<answers.length;j++){
				answers[j].selected = "donno";
				if ($scope.questions[i].userAnswer === answers[j].answer && answers[j].correct===true){
					console.log('j is: ', j);
					console.log("in correct answer: answers[j].answer: ",answers[j].answer);
					$scope.questions[i].userAnswerCorrect = true;
      				answers[j].selected = "true";
      				$scope.correctCount++;
				} else if ($scope.questions[i].userAnswer === answers[j].answer && answers[j].correct===false) {
					console.log('j is: ', j);
					console.log("answers[j].answer: ",answers[j].answer);
					answers[j].selected = "false";
				} 
				
			}
		}


		console.log("total correct is: ", $scope.correctCount);
		console.log("Percentage is: ", ($scope.correctCount/3 * 100).toFixed(2) );
		// NewQuestionFactory.addNewQues($scope.newQues, function(data){
		// 	console.log("in NewQuestionController addNewQues method");
		// 	console.log("data is: ", data);
		// 	$location.url('/scoreboard');
		// });

		UserFactory.saveUserNewScore($scope.correctCount, function(data) {
			$location.url('/scoreboard');
		})
	}

})