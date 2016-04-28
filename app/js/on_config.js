function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider

  .state('Home', {
    url: '/',
    controller: 'MatchHistoryCtrl as home',
    templateUrl: 'homePage.html',
    title: 'ToyBox Stadium Home Page',
  })

  .state('MatchHistory', {
    url: '/matchhistory',
    controller: 'MatchHistoryCtrl as match',
    templateUrl: 'matchHistory.html',
    title: 'ToyBox Stadium MatchHistory'
  })

  .state('SelectedMatch', {
    url: '/selectedmatch',
    controller: 'SelectedMatchCtrl as selected',
    templateUrl: 'selectedMatch.html',
    title: 'ToyBox Stadium Selected Match'
  })

  .state('test', {
    url: '/test',
    controller: 'MatchHistoryCtrl as match',
    templateUrl: 'home2.html'
  });

  // .state('SelectedTeam', {
  //   url: '/selectedteam',
  //   controller: 'SelectedTeamCtrl as selectedteam',
  //   templateUrl: 'selectedTeam.html',
  //   title: 'ToyBox Stadium Selected Team'
  // });
  

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;

