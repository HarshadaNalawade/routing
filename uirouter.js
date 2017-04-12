var uiRouterApp = angular.module('uirouterApp',['ui.router']);
uiRouterApp.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise('home');
    $stateProvider
    .state('home',{
        templateUrl : 'pages/partial.html',
        url : '/home'
    })
    .state('home.list',{
        templateUrl : 'pages/list.html',
        url : '/list',
        controller : function($scope)
        {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })
    .state('home.paragraph',{
        template : 'I could use a drink right now',
        url : '/paragraph'
    })
    .state('about',{
        templateUrl : 'pages/about.html',
        url : '/about'
    });
    $locationProvider.html5Mode(true);
})
uiRouterApp.controller('uirouterController',function($scope){

})