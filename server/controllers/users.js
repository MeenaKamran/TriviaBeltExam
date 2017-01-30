var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function() {
	return {
		login_user: function(req, res){
			console.log("req.body ", req.body);
			User.find({user_name: req.body.user_name}, function(err, result){
				if (err){
					console.log("error finding the user ",err); 
				} else {
					//found the client now login the user
					console.log( "successfully executed the find query on users");
					if (result.length == 0) {
						//there wasn't any user found so create one and add to the user collection
						var new_user = User({user_name: req.body.user_name});
						new_user.save(function(err, results){
							if (err) {
								console.log("couldn't add the new user");
							} else {
								console.log("Successfully added the new user");
								res.json(results)
							}
						})
					}
					else {
						// user already exist, so don't need to save
						console.log("user already exist, so return the user, result is: ", result);
						res.json(result);
					}
				}
			})
		},

		saveNewScore: function(req, res) {
			console.log("req.body: ", req.body);
			console.log("req.params.userName: ", req.params.userName);
			console.log("req.params.newScore: ", req.params.newScore);
			User.findOne({user_name: req.params.userName}, function(err, result) {
				if (err) {
					console.log("error finding the user ",err); 
				} else {
					//found the client now login the user
					console.log( "successfully executed the find query on users");
					// console.log(result.length);
					console.log(result);
					console.log(result._id);
					var percent = (req.params.newScore/3 * 100).toFixed(2);
					User.findByIdAndUpdate(result._id, {score: req.params.newScore, percent: percent}, function(err, output) {
						
						if (err) {
							console.log("Error Saving the new user score");
						} else {
							console.log("successfully saved the user with new score.");
							res.json(output);
						}
					})
					
				}
			})
		},


		getAllUsers: function(req, res) {
			User.find({}, function(err, results) {
				if (err) {
					console.log("error retrieving all users: ", err);
				} else {
					console.log("Successfully retrieved all appts: ", results);
					res.json(results);
				}
			})
		}

	}
	
}) ();