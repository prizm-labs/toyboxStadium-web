import Firebase from 'firebase';

function BaseStatsCtrl($scope,$firebaseObject,$firebaseArray,AppSettings) {
	'ngInject';

	const vm = this;

	var list = $firebaseArray(new Firebase(AppSettings.tbdatabaseUrl));
	vm.baseStatsListing = list;

	

 


	// testing base stats character details //

	var ref = new Firebase(AppSettings.tbdatabaseUrl);
	var obj = $firebaseObject(ref);

	obj.$bindTo($scope, 'data').then(function(){
		angular.forEach(obj, function(value){
			vm.pokeName = value.pokeName;
			vm.MaxHP = value.MaxHP;
			vm.speed = value.Speed;
			vm.selectedSingleAttack = value.selectedSingleAttack;
			vm.selectedSingleDefend = value.selectedSingleDefend;
			vm.selectedMultiAttack = value.selectedMultiAttack;
			vm.selectedMultiDefend = value.selectedMultiDefend;
			vm.singleAttackDamage = value.singleAttackDamage;
			vm.singleDefendDamage = value.singleDefendDamage;
			vm.multipleAttackDamage = value.multipleAttackDamage;
			vm.multipleDefendDamage = value.multipleDefendDamage;
			vm.myElement = value.myElement;
		});
	});

}

export default {
	name: 'BaseStatsCtrl',
	fn: BaseStatsCtrl
};