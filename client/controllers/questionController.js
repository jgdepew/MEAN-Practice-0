app.controller('questionController', function($scope, questionFactory, $location, $routeParams) {
	
	$scope.questions = [];

	questionFactory.checkuser(function(data){
		$scope.currUser = data.user;
		if(!$scope.currUser) {
			$location.url('/')
		} 
	});

	function getAllQuestions() {
		questionFactory.getAllQuestions(function(data){
			$scope.questions = data;
		})
	}

	function getQuestion() {
		questionFactory.getQuestion($routeParams.id, function(data) {
			$scope.question = data;
		});
	}

	if($routeParams.id) {
		getQuestion();
	} 
	
	getAllQuestions();

	$scope.createQuestion = function(){
		if($scope.question.question.length >= 10) {
			questionFactory.createQuestion($scope.question, getAllQuestions)
		} else{
			alert('Question is not long enough');
		}
	}

	$scope.createAnswer = function() {
		if($scope.answer.answer.length >= 5) {
			$scope.answer.question = $routeParams.id
			questionFactory.createAnswer($scope.answer, getQuestion);
		} else { 
			alert('Answer is not long enough')
		}
	}

	$scope.addLike = function(id) {
		questionFactory.addLike(id, getQuestion);
		$location.url('/question/'+$routeParams.id)
	}


});





