function SelectedMatchCtrl($scope) {
	'ngInject';

	const vm = this;

	vm.title = 'Angulars';
	vm.number = 1234;


	$scope.message = 'Hola!';

}

export default {
	name: 'SelectedMatchCtrl',
	fn: SelectedMatchCtrl
};