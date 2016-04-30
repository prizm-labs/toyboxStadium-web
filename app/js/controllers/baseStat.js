import Firebase from 'firebase';

function BaseStatsCtrl($scope,$firebaseObject,$firebaseArray,AppSettings) {
	'ngInject';

	const vm = this;

	var list = $firebaseArray(new Firebase(AppSettings.tbdatabaseUrl));
	vm.baseStatsListing = list;


	







	// 	// Testing out routeParams. Come back to this later. //


	// var ref = new Firebase(AppSettings.tbdatabaseUrl);
	// var obj = $firebaseObject(ref);

	// const rp = $routeParams;
	// obj.$bindTo($scope, 'data').then(function(){
	// 	angular.forEach(obj, function(value){
	// 		// rp.pokeName = value.pokeName;
	// 		// rp.MaxHP = value.MaxHP;
	// 		// rp.speed = value.Speed;
	// 		// rp.selectedSingleAttack = value.selectedSingleAttack;
	// 		// rp.selectedSingleDefend = value.selectedSingleDefend;
	// 		// rp.selectedMultiAttack = value.selectedMultiAttack;
	// 		// rp.selectedMultiDefend = value.selectedMultiDefend;
	// 		// rp.singleAttackDamage = value.singleAttackDamage;
	// 		// rp.singleDefendDamage = value.singleDefendDamage;
	// 		// rp.multipleAttackDamage = value.multipleAttackDamage;
	// 		// rp.multipleDefendDamage = value.multipleDefendDamage;
	// 		// rp.myElement = value.myElement;
	// 	});
	// });



}

export default {
	name: 'BaseStatsCtrl',
	fn: BaseStatsCtrl
};