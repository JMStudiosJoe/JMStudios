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

        $scope.teamMembers = [{
            name: "Joseph Richardson",
            title: "Co Founder / Software Engineer",
            description: "My name is Joseph Richardson. I am driven, passionate and ambitious with the projects I work on. JMStudios was founded in order for me to start creating solutions to problems I encounter throughout daily life.",
            links: [{
                    name: "Github",
                    icon:'mdi-github-circle large',
                    url: "https://github.com/JMStudiosJoe"
                },
                {
                    name: "LinkedIn",
                    icon:'mdi-linkedin-box large',
                    url: "https://www.linkedin.com/in/joseph-richardson-97206953"
                }]
        }];
    });
})();
