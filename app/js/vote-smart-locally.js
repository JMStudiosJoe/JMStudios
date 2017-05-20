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

        $scope.voterInfo = {};
        $scope.divisions = [];
        $scope.officials = {};
        $scope.offices = {};
        $scope.elections = {};

        $scope.models = {
            voterAddress:''
        };
        $scope.testing = function () {
            $scope.models.voterAddress = '1184+normandy+drive+cambpell+ca+95008';
            $scope.findVoterInfo();
        };
        $scope.findVoterInfo = function() {
            $http.post('/get-vote-info', {'address': $scope.models.voterAddress}, {}).then(function successCallback(response) {

                $scope.offices = response.data.offices;
                $scope.officials = response.data.officials;
                $scope.divisions = response.data.divisions;
                $scope.elections = response.data.elections;

                console.log("-----------elections-------------");
                console.log( $scope.elections );

            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };

    });
})();
