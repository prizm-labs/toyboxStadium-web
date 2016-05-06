import Firebase from 'firebase';

function BaseStatsCtrl($scope,$firebaseObject,$firebaseArray,AppSettings) {
	'ngInject';

 const vm = this;

	var list = $firebaseArray(new Firebase(AppSettings.basestatsUrl));
	vm.baseStatsListing = list;

	//// this scope will only allow one accordion tab to be openned at a time. ////
	// $scope.OneAtATime = true;

	//// function to toggle collapse and close accordion ////
	// $scope.status = function(){
	// 	for(var i = 0; i < vm.baseStatsListing.length; i++){
	// 		vm.baseStatsListing[i].isopen == false;
	// 		if(vm.baseStatsListing[i].isopen == true){
	// 			vm.baseStatsListing[i].isopen == false;
	// 			console.log('get if')
	// 		} else {
	// 			vm.baseStatsListing[i].isopen == true;
	// 			console.log('getting in else');
	// 		}
	// 	}
	// };
	// $scope.status = {
	// 	isOpen: new Array($scope.groups.length)
	// };
	// for(var i = 0; i < $scope.status.isOpen.length; i++) {
	// 	$scope.status.isOpen[i] = ( i === 0 );
	// }


}

export default {
	name: 'BaseStatsCtrl',
	fn: BaseStatsCtrl
};