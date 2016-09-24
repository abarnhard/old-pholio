(function(){
  'use strict';

  angular.module('portfolio')
  .controller('ProjectsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.$broadcast('show-nav-img');

  }]);
})();
