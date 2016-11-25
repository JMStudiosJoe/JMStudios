(function(){
    var app = angular.module('jmstudios-app.contact',[
        'ngParallax',
        'jmstudios-app.ParallaxService'
    ])
    .directive('contact', function() {
        return {
            restrict: "E",
            templateUrl: "/app/views/contact.html",
            controller: "Contact"
        };
    })
    .controller('Contact', function($scope, $http, ParallaxService) {

        console.log(  );
        $scope.baseURL = "/app/images/";

        $scope.getParallaxImageName = function() {
            return $scope.baseURL + ParallaxService.getImageName();
        };
    });
})();
