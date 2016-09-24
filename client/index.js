(function(){
  'use strict';

  angular.module('portfolio', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {templateUrl:'public/views/home/home.html', controller:'HomeCtrl'})
    .when('/projects', {templateUrl:'public/views/projects/projects.html', controller:'ProjectsCtrl'})
    .when('/skills', {templateUrl:'public/views/skills/skills.html', controller:'SkillsCtrl'})
    .when('/contact', {templateUrl:'public/views/contact/contact.html', controller:'ContactCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();
