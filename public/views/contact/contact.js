(function(){
  'use strict';

  angular.module('portfolio')
  .controller('ContactCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.$broadcast('show-nav-img');

  }]);
})();
