(function(){
    var app = angular.module('jmstudios-app.voteSmartLocal',['ngParallax'])
    .directive('voteSmartLocal', function() {
        return {
            restrict: "E",
            templateUrl: "/app/views/vote-smart-local.html",
            controller: "VoteSmartLocallyController"
        };
    })
    .controller('VoteSmartLocallyController', function($scope, $http) {

        $scope.voterInfo = "";
        $scope.models = {
            voterAddress:''
        };

        $scope.findVoterInfo = function() {
            $http.post('/get-vote-info', {'address': $scope.models.voterAddress}, {}).then(function successCallback(response) {
                console.log("IN RESPONSE VOTE SMART JS");
                console.log(response);
                $scope.voterInfo = response;
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };

    });
})();
