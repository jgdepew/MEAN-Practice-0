var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var QuestionSchema = Schema({
	question: String,
	description: String,
	user: {type: Schema.Types.ObjectId, ref: "User"},
	answers: [{type: Schema.Types.ObjectId, ref: "Answer"}],
	created_at  :{ type: Date, default: Date.now },
})

mongoose.model('Question', QuestionSchema)