//typescript and angularjs 2 hopefully https://angular.io/docs/ts/latest/quickstart.html
(function(){
    var app = angular.module('jmstudios-app',[]);
    app.controller('myController', function($scope, $http) {

        $scope.temp = "hello jms";
    });
})();
