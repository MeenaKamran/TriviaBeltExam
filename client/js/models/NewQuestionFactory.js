myAppModule.factory('NewQuestionFactory', function($http, $location, $localStorage) {
	var questions = [];
	var triviaQuestions = [];
	var factory = {};
	
	factory.addNewQues = function(newQues, callback){
		$http.post('/add_new_question', newQues).success(function(output){
			questions = output;
			callback(questions);
		})
	}

	factory.getAllQuestions = function(callback){
		$http.get('/get_all_questions').success(function(output){
			questions = output;
			callback(questions);
		})
	}

	factory.getTriviaQuestions = function(callback){
		$http.get('/get_trivia_ques').success(function(output){
			triviaQuestions = output;
			callback(triviaQuestions);
		})
	}

	return factory;
})