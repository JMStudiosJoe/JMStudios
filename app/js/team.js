(function(){
    var app = angular.module('jmstudios-app.team',[])
    .directive('team', function() {
        return {
            restrict: "E",
            templateUrl: "/app/views/team.html",
            controller: "Team"
        };
    })
    .controller('Team', function($scope, $http) {

        $scope.temp = "hello Team";
    });
})();
