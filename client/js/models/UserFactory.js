myAppModule.factory('UserFactory', function($http, $location, $localStorage) {
	var user = {};
	var users = [];
	var otherUsers = [];
	var factory = {};
	var userId;


	factory.LoginUser = function(newUser, callback) {
		//create or login user
		console.log("in UserFactory, newUser is: ", newUser);
		var temp_user = {user_name: newUser};
		console.log(temp_user);
		$http.post('/login_user', temp_user).success(function(output){
			user = output;
			u
			console.log("in UserFactory, LoginUser, user is: ",user);
			// $location.path('/dashboard');
			callback(user);
		})
	}

	factory.saveUserNewScore = function(newScore, callback) {
		var userName =  $localStorage.User.user_name;
		var percentage = (newScore/3 * 100).toFixed(2);
		$http.post('/saveNewScore/'+userName+'/'+newScore).success(function(output){
			callback(output);
		})
	}
	
	factory.get_all_users = function(callback) {
		$http.get('/getUsers').success(function(output) {
			users = output;
			callback(users);
		})
	}

	return factory;
})