//typescript and angularjs 2 hopefully https://angular.io/docs/ts/latest/quickstart.html
(function(){
    var app = angular.module('jmstudios-app', ['ui.router',
                                            'jmstudios-app.home'
                                            ]).config(function($stateProvider, $urlRouterProvider) {
                                              //
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
  .state('index', {
    url: "/",
    templateUrl: "index.html"
  })
    .state('home', {
      url: "/home",
      templateUrl: "/app/views/home.html",
      controller: 'Home'
    })
    .state('projects', {
      url: "/projects",
      templateUrl: "/app/views/projects.html",
      controller: 'Projects'
    })

});


})();
