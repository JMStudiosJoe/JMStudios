(function(){
    var app = angular.module('jmstudios-app.contact',[])
    .directive('contact', function() {
        return {
            restrict: "E",
            templateUrl: "/app/views/contact.html",
            controller: "Contact"
        };
    })
    .controller('Contact', function($scope, $http) {

        $scope.temp = "hello Contact";
    });
})();
