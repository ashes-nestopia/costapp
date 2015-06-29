app.config(function($stateProvider, $urlRouterProvider) {
$stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html"
  })
    .state('app.search', {
        url: "/search",
        views: {
            'menuContent': {
                templateUrl: "templates/search.html"
            }
        }
    })
    .state('app.add_project',{
        url:'/addproject',
        views:
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
