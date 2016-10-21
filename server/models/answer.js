var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var AnswerSchema = mongoose.Schema({
	answer: String,
	details: String,
	likes: Number,
	question: {type: Schema.Types.ObjectId, ref: "Question"},
	user: {type: Schema.Types.ObjectId, ref: "User"},
	created_at  :{ type: Date, default: Date.now }	
})

mongoose.model('Answer', AnswerSchema)