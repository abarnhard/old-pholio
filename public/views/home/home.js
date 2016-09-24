(function(){
  'use strict';

  angular.module('portfolio')
  .controller('HomeCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.$broadcast('hide-nav-img');

  }]);
})();
