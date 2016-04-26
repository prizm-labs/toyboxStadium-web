import Firebase from 'firebase';

function MatchHistoryCtrl($scope,$firebaseObject,$firebaseArray,AppSettings) {
  'ngInject';


  // ViewModel
  const vm = this;

  var ref = new Firebase(AppSettings.sessionsUrl);

  var obj = $firebaseObject(ref);

  // to take an action after the data loads, use the $loaded() promise
  obj.$loaded().then(function() {

    // To iterate the key/value pairs of the object use angular.forEach()
   angular.forEach(obj, function(value, key) {
    // console.log(key, value);
  });
 });



  // To make the data available in the DOM, assign it to $scope
  $scope.data = obj;






  var list = $firebaseArray(new Firebase(AppSettings.sessionsUrl));
  vm.data = list;

  // vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  // vm.number = 1234;

  var rec = list.$keyAt(3);
  console.log(rec);

}

export default {
  name: 'MatchHistoryCtrl',
  fn: MatchHistoryCtrl
};
