function MatchHistoryDirective() {

	// refactor your directive to render your background image
	// return function(scope,element,attrs){
	// 	var url = attrs.backImg;
	// 	templateUrl: 'directives/matchHistory.directive.html',
	// 	element.css({
	// 		'background-image': 'url(' + url +')',
	// 		'background-size' : 'cover'
	// 	});
	// };

	// return {
	// 	restrict: 'EA',
	// 	templateUrl: 'directives/matchHistory.directive.html',
	// 	scope: {
	// 	},
	// 	link: (scope, element) => {
	// 		element.on('click', () => {
	// 			// rendering the team that's being clicked on //
	// 			window.alert('working on click');
	// 		});
	// 	}
	// };
}

export default {
	name: 'matchHistoryDirective',
	fn: MatchHistoryDirective
};