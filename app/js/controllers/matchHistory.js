import Firebase from 'firebase';

function MatchHistoryCtrl($scope,$firebaseObject,$firebaseArray,AppSettings) {
  'ngInject';

  // ViewModel remember vm is the $scope that is named to render to your html
  const vm = this;

  // var ref = new Firebase(AppSettings.sessionsUrl);

  // var obj = $firebaseObject(ref);

  // // to take an action after the data loads, use the $loaded() promise
  // obj.$loaded().then(function() {

  //   // To iterate the key/value pairs of the object use angular.forEach()
  //   angular.forEach(obj, function(value, key) {
  //     console.log(key, value);
  //   });
  // }); 

  //  // To make the data available in the DOM, assign it to $scope
  //  $scope.data = obj;

  // obj.$bindTo($scope, 'data').then(function(){

  //   angular.forEach(obj, function(value){
  //     vm.matchDuration = value.match_duration;
  //     vm.matchDate = value.match_date;
  //     vm.matchCompletion = value.match_completion;
  //   });
  // });

  // Winner : if winner is team red else team blue //
  // going to have to figure out how to loop through and grab all the instances


  // var testRef = new Firebase(AppSettings.tbdatabaseUrl);
  // var obj = $firebaseObject(testRef);

  // $scope.data = obj;

  // // first you need to access team red
  // // from there you need to use angular to display the winner
  // var obj = $firebaseObject(testRef);
  // obj.$bindTo($scope, 'data').then(function(){
  //   angular.forEach(obj, function(value, key){  
  //     vm.matchDate = value.match_date;
  //     vm.matchDuration = value.match_duration;
  //     vm.matchCompletion = value.match_completion;

  //   })
  // });



  var list = $firebaseArray(new Firebase(AppSettings.tbdatabaseUrl));

  vm.matchListing = list;
  console.log(vm.matchListing);

  // Promising that your db is loaded //
  list.$loaded().then(function(exist){
    exist === list;
  }).catch(function(error){
    console.log('Error:',error);
  });



  

}




export default {
  name: 'MatchHistoryCtrl',
  fn: MatchHistoryCtrl
};
