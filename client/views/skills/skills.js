(function(){
  'use strict';

  angular.module('portfolio')
  .controller('SkillsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
    $rootScope.$broadcast('show-nav-img');

  }]);
})();
