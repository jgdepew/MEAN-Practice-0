app.factory('questionFactory', ['$http', '$location', '$routeParams', function($http, $location, $routeParams){

	var factory = {};

	var questions = [];

	factory.checkuser = function(callback) {
		$http.get('/checkUser').then(function(data) {
			callback(data.data);
		})
	}

	factory.createQuestion = function(question, callback) {
		$http.post('/question', question).then(function(data){
			callback(data);
		})
		$location.url('/dashboard')
	}

	factory.createAnswer = function(answer, callback) {
		$http.post('/answer', answer).then(function(data) {
			callback(data);
		})
		$location.url('/dashboard')
	}

	factory.getAllQuestions = function(callback) {
		$http.get('/question').then(function(data) {
			callback(data.data.questions)
		})
	}

	factory.getQuestion = function(id, callback) {

		$http.get('/question/' + id).then(function(data) {
			callback(data.data.question)
		})
	}

	factory.addLike = function(id, callback) {
		$http.put('/answer/' + id).then(function(data) {
			callback(data.data.question)
		})
		$location.url('/question/'+$routeParams.id)
	}

	return factory;
}])