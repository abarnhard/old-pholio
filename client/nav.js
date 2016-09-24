(function(){
  'use strict';

  angular.module('portfolio')
  .controller('NavCtrl', ['$scope', function($scope){
    $scope.showImg = false;
    $scope.$on('hide-nav-img', function(){
      $scope.showImg = false;
    });
    $scope.$on('show-nav-img', function(){
      $scope.showImg = true;
    });

  }]);
})();
