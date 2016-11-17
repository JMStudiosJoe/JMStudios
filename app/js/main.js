// function TestCtrl() {
//   // basic controller where we preset the scope myString variable
//   var self = this;
//   self.myString = "hello world";
// }
//
// // this is where the filter magic happens.
//
//
// angular.module('app', [])
// .controller('TestCtrl', TestCtrl);


var app = angular.module('jmstudios-app',[]);
app.controller('myController', function($scope, $http) {

    $scope.temp = "hello jms";
})
