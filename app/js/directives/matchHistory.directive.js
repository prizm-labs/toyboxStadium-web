function MatchHistoryDirective() {

	return {
		restrict: 'EA',
		templateUrl: 'directives/matchHistory.directive.html',
		scope: {
			message: '@clickMessage'
		},
		link: (scope, element) => {
			element.on('click', () => {
				window.alert('Test is working' + scope.message);
			});
		}
	};
}

export default {
	name: 'matchHistoryDirective',
	fn: MatchHistoryDirective
};