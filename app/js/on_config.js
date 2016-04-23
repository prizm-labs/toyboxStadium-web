function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
  .state('Home', {
    url: '/',
    controller: 'MatchHistoryCtrl as home',
    templateUrl: 'home2.html',
    title: 'Home2'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
