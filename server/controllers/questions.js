var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = (function() {
	return{
		add_question: function(req, res){
			var ques = Question({question:req.body.question});
			ques.save(function(err, result) {
				if (err) {
					console.log("Error saving the question ", err);
				} else {
					console.log("Successfully saved the question", result);
					var ans1 = new Answer({answer: req.body.answer, correct: true});
					ans1._question = result._id;
					result._answer.push(ans1);
					ans1.save(function(err, result1){
						if (err) {
							console.log("error saving the correct answer: ", err);
						} else {
							console.log("Successfully saved the correct answer: ", result1);
							result.save(function(err, output){
								if (err){
									console.log("error pushing the correct answer into the answer array: ", err);
								} else {
									console.log("Successfully pushed the correct answer into the answer array: ", output);
								}
							})
						}
					})
					var ans2 = new Answer({answer: req.body.fakeAns1, correct: false});
					ans2._question = result._id;
					result._answer.push(ans2);
					ans2.save(function(err, result2){
						if (err) {
							console.log("error saving the fake answer1");
						} else {
							console.log("Successfully saved the fake answer1");
							result.save(function(err, output){
								if (err){
									console.log("error pushing the fake answer1 into the answer array: ", err);
								} else {
									console.log("Successfully pushed the fake answer1 into the answer array: ", output);
								}
							})
						}
					})
					var ans3 = new Answer({answer: req.body.fakeAns2, correct: false});
					ans3._question= result._id;
					result._answer.push(ans3);
					ans3.save(function(err, result3){
						if (err) {
							console.log("error saving the fake answer2");
						} else {
							console.log("Successfully saved the fake answer2");
							result.save(function(err, output){
								if (err){
									console.log("error pushing the fake answer2 into the answer array: ", err);
								} else {
									console.log("Successfully pushed the fake answer2 into the answer array: ", output);
									res.json(output);
								}
							})
						}
					})
				}
			})
		},

		get_questions: function(req, res){
			Question.find({}).populate('_answer').exec(function(err, results){
				if (err) {
					console.log("Error retreiving all questions");
				} else {
					console.log("Successfully got all questions");
					res.json(results);
				}
			})
		}


	}
}) ();