var app = angular.module('routingApp',['ngRoute']);
app.config(function($routeProvider,$locationProvider){
    $routeProvider
    //route for home page
    .when('/home',{
        templateUrl : 'pages/home.html',
        controller : 'mainController'
    })
    //route for about page
    .when('/about',{
        templateUrl : 'pages/about.html',
        controller : 'aboutController'
    })
    //route for contact us page
    .when('/contact',{
        templateUrl : 'pages/contact.html',
        controller : 'contactController'
    })
    .otherwise({
        templateUrl : 'pages/home.html',
        controller : 'mainController'
    })
    $locationProvider.html5Mode(true);
})
app.controller('mainController',function($scope){
    $scope.message = 'Everyone come and see how good I look!';
});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});