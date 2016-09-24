(function(){
  'use strict';

  angular.module('portfolio')
  .controller('ResumeCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.$broadcast('show-nav-img');

  }]);
})();
