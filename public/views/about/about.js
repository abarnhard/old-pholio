(function(){
  'use strict';

  angular.module('portfolio')
  .controller('AboutCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.$broadcast('show-nav-img');

  }]);
})();
