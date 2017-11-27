angular.module('vote').config(function($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/vote'
        })
        .when('/vote', {
            templateUrl: 'views/vote.html',
            controller: 'voteCtrl',
            controllerAs: 'voteCtrl'
        })
        .when('/admin', {
            templateUrl: 'views/admin.html',
            controller: 'adminCtrl',
            controllerAs: 'adminCtrl'
        })
        .otherwise({redirectTo: '/vote'});
});