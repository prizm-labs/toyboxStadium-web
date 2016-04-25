function OnConfig($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider

  .state('Home', {
    url: '/',
    controller: 'MatchHistoryCtrl as home',
    templateUrl: 'homePage.html',
    title: 'ToyBox Stadium Home Page',
  });


  
  // don't forget to get rid of the semi-colon when you extend to the rest of your .states' 

  // .state('MatchHistory', {
  //   url: '/matchhistory',
  //   controller: 'MatchHistoryCtrl as match',
  //   templateUrl: 'homePage.html',
  //   title: 'ToyBox Stadium MatchHistory',
  //   onEnter: function(){
  //     Webflow.destroy();
  //   }
  // });
  

  // .state('MatchHistory', {
  //   url: '/matchhistory',
  //   controller: 'MatchHistoryCtrl as match',
  //   templateUrl: 'matchHistory.html',
  //   title: 'ToyBox Stadium Match History Page',
  //   onEnter: function(){
  //     Webflow.destroy();
  //   }
  // });

  // .state('SelectedMatch', {
  //   url: '/selectedmatch',
  //   controller: 'SelectedMatchCtrl as selectedmatch',
  //   templateUrl: 'selectedMatch.html',
  //   title: 'ToyBox Stadium Selected Match'
  // });

  // .state('SelectedTeam', {
  //   url: '/selectedteam',
  //   controller: 'SelectedTeamCtrl as selectedteam',
  //   templateUrl: 'selectedTeam.html',
  //   title: 'ToyBox Stadium Selected Team'
  // });
  

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;

