//typescript and angularjs 2 hopefully https://angular.io/docs/ts/latest/quickstart.html
(function(){
    var app = angular.module('jmstudios-app',['ui.router',
                                            'jmstudios-app.contact',
                                            'jmstudios-app.projects',
                                            'jmstudios-app.team',
                                            'jmstudios-app.downloads']).config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/index.html"
    })
    .state('projects', {
      url: "/projects",
      templateUrl: "/app/views/projects.html",
      controller: 'Projects'
    })

});


})();
