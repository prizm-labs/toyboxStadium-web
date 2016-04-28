function MatchHistoryDirective() {

	return {
		restrict: 'EA',
		templateUrl: 'directives/matchHistory.directive.html',
		scope: {
		},
		link: (scope, element) => {
			element.on('click', () => {
				// rendering the team that's being clicked on //
				window.alert('working on click');
			});
		}
	};
}

export default {
	name: 'matchHistoryDirective',
	fn: MatchHistoryDirective
};