myAppModule.config(["$routeProvider", function ($routeProvider, $routeParams) {
  	$routeProvider
      .when('/', {
        templateUrl: './../static/partials/login.html'
      })
  		.when('/scoreboard', {
  			templateUrl: './../static/partials/scoreboard.html'
  		})
      .when('/new_question', {
        templateUrl: './../static/partials/newQuestion.html'
      })
      .when('/lets_play', {
        templateUrl: './../static/partials/playTrivia.html'
      })
  		.otherwise({
  			redirectTo: '/'
  		});
}]);