(function () {
    'use strict';

    /* App Module */
  
    var website = angular.module('website', [
        'homeModule',
        'playModule'
    ]);

    //website.config(['$stateProvider','$urlRouterProvider',
    //function ($stateProvider, $urlRouteProvider) {
    //    $urlRouteProvider
    //        .otherwise('/home');
    //}]);

    website.run(['$state', 
    function ($state) {
        $state.go('home');
    }]);

})();

