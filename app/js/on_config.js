function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider

  .state('MatchHistory', {
    url: '/',
    controller: 'MatchHistoryCtrl as match',
    templateUrl: 'matchHistory.html',
    title: 'ToyBox Stadium MatchHistory Page',
  })

  // .state('MatchHistory', {
  //   url: '/matchhistory',
  //   controller: 'MatchHistoryCtrl as match',
  //   templateUrl: 'matchHistory.html',
  //   title: 'ToyBox Stadium MatchHistory'
  // })

  // .state('SelectedMatch', {
  //   url: '/selectedmatch',
  //   controller: 'SelectedMatchCtrl as selected',
  //   templateUrl: 'selectedMatch.html',
  //   title: 'ToyBox Stadium Selected Match'
  // })

  // .state('SelectedTeam', {
  //   url: '/selectedteam',
  //   controller: 'SelectedTeamCtrl as selectedteam',
  //   templateUrl: 'selectedTeam.html',
  //   title: 'ToyBox Stadium Selected Team'
  // });
  
  .state('BaseStats', {
    url: '/basestats',
    controller: 'BaseStatsCtrl as base',
    templateUrl: 'baseStats.html',
    title: 'ToyBox Stadium Base Stats'
  });


  //  // capturing the id to the specific pokemon; setting character as scope //
  // .state('BaseStatsDetails', {
  //   url: '/basestats/:id',
  //   controller: 'BaseStatsCtrl as character',
  //   templateUrl: 'baseStatsDetailedStats.html',
  //   title: 'ToyBox Stadium ID'
  // });



  $urlRouterProvider.otherwise('/');

}

export default OnConfig;

