(function(){
    var app = angular.module('jmstudios-app.downloads',['ngParallax'])
    .directive('downloads', function() {
        return {
            restrict: "E",
            templateUrl: "/app/views/downloads.html",
            controller: "Downloads"
        };
    })
    .controller('Downloads', function($scope, $http) {

        $scope.temp = "hello Downloads";
    });
})();
