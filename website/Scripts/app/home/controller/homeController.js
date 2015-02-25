(function () {
    'use strict';    
   
    var homeModule = angular.module('homeModule');

    homeModule.controller('HomeController', ['$scope',
      function ($scope) {          
          $scope.currentTime ='today';
      }]);
})();
