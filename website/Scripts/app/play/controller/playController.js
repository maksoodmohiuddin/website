(function () {
    'use strict';

    var playModule = angular.module('playModule');

    playModule.controller('PlayController', ['$scope',
      function ($scope) {         
         
          var init = function () {
              $scope.playerOne = true;

              $scope.ShowPlayer1LeftTop = false;
              $scope.ShowPlayer2LeftTop = false;
          };

          $scope.LeftTopClicked = function () {
              if ($scope.playerOne) {
                  // mark 
                  $scope.ShowPlayer1LeftTop = true;
                  $scope.ShowPlayer2LeftTop = false;
                  // turn
                  $scope.playerOne = false;
              }
              else {
                  // mark
                  $scope.ShowPlayer1LeftTop = false;
                  $scope.ShowPlayer2LeftTop = true;
                  // turn
                  $scope.playerOne = true;
              }             
          };

          init();
      }]);
})();
