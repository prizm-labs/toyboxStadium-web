import Firebase from 'firebase';

function BaseStatsCtrl($scope,$firebaseObject,$firebaseArray,AppSettings) {
	'ngInject';

 const vm = this;

	var list = $firebaseArray(new Firebase(AppSettings.basestatsUrl));
	vm.baseStatsListing = list;
	console.log(list);

	$scope.OneAtATime = true;


}

export default {
	name: 'BaseStatsCtrl',
	fn: BaseStatsCtrl
};