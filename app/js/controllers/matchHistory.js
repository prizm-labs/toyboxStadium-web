import Firebase from 'firebase';

function MatchHistoryCtrl($scope,$firebaseObject,$firebaseArray,AppSettings) {
  'ngInject';


  // ViewModel
  const vm = this;

  var ref = new Firebase(AppSettings.registryUrl);

  var obj = $firebaseObject(ref);
  // to take an action after the data loads, use the $loaded() promise
  obj.$loaded().then(function() {
    // console.log('loaded record:', obj, obj.$id, obj.someOtherKeyInData);

   // To iterate the key/value pairs of the object, use angular.forEach()
   // whenever you pass in a parameter like value or/and key, you have to use it or angular will give you an error because it needs to be used.
   angular.forEach(obj, function(value, key) {
    console.log(key[0]);
    // console.log(key, value);
  });
 });

  // To make the data available in the DOM, assign it to $scope
  // $scope.data = obj;

  var list = $firebaseArray(new Firebase(AppSettings.registryUrl));
  vm.data = list;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;


  

}

export default {
  name: 'MatchHistoryCtrl',
  fn: MatchHistoryCtrl
};
