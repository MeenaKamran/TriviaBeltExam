var users = require('./../controllers/users.js');
var questions = require('./../controllers/questions.js')

module.exports = function(app){
	app.post('/login_user', function(req, res) {
		console.log("in server routes: /login_user");
		console.log("req.body is: ", req.body);
		users.login_user(req, res);
	});

	app.post('/add_new_question', function(req, res) {
		console.log("in server routes: /add_new_question");
		console.log("req.body is: ", req.body);
		questions.add_question(req, res);
	});

	app.get('/get_all_questions', function(req, res) {
		console.log("in server routes: /get_all_questions");
		questions.get_questions(req, res);
	});

	app.post('/saveNewScore/:userName/:newScore', function(req, res) {
		console.log("in server routes: /saveNewScore/");
		console.log("req.params userName: ", req.params.userName);
		console.log("req.params newScore: ", req.params.newScore);
		users.saveNewScore(req, res);
	});

	app.get('/getUsers', function(req, res) {
		console.log("in server routes: /getUsers");
		users.getAllUsers(req, res);
	})

	// app.get('/get_trivia_ques', function(req, res) {
	// 	console.log("in server routes: /get_trivia_ques");
	// 	questions.get_trivia_ques(req, res);
	// })

};
