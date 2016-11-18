(function(){
    var app = angular.module('jmstudios-app.projects',[])
    .directive('projects', function() {
        return {
            restrict: "E",
            templateUrl: "/app/views/projects.html",
            controller: "Projects"
        };
    })
    .controller('Projects', function($scope, $http) {

        $scope.temp = "hello projects";
    });
})();
