var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
	answer: {type:String, required:true},
	correct: {type:Boolean, required:true},
	_question: {type: Schema.Types.ObjectId, ref:'Question'}
}, {timestamps: true });
mongoose.model('Answer', AnswerSchema); 