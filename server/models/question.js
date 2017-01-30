var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var QuestionSchema = new mongoose.Schema({
	question: {type:String, minlength:15, required:true},
	_answer: [{type: Schema.Types.ObjectId, ref:'Answer'}]
}, {timestamps: true });
mongoose.model('Question', QuestionSchema); 