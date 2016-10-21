app.controller('userController', function($scope, userFactory, $location, $routeParams) {
	$scope.login = function() {
		if(!$scope.user || $scope.user.name.length < 3) {
			alert('Invalid username');
		} else {
			userFactory.login($scope.user)
			$location.url('/dashboard')
		}
	}
	userFactory.checkuser(function(data){
		$scope.currUser = data.user;
		if(!$scope.currUser) {
			$location.url('/')
		} 
	})

	if($routeParams.id) {
		userFactory.getUser($routeParams.id, function(data) {
			$scope.user = data.data.user;
		})
	}
});