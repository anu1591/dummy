$('.container2').hide();
$('.container3').hide();
function playersController($scope) {

	$scope.playersSubmit = function(scope) {
		
		//do validations for the user names entered. that is authentication checking.
		alert($scope.players.player1+", "+$scope.players.player2);

		// this obect has to come from database in ajax call.
    	$scope.quizes = [
		{title: 'quiz1', questions:3},
		{title: 'quiz2', questions:3},
		{title: 'quiz3', questions:3}
		];

		//containers switching.
		$('.container').hide('slow');
		$('.container2').show('slow');
	}
}