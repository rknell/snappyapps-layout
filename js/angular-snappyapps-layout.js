angular.module('snappyappsLayout', []).directive('saContainer', function () {
  return {
    restrict: 'A',
    controller: function ($scope, $timeout, $rootScope) {
      function postDigest(callback) {
        var unregister = $rootScope.$watch(function () {
          unregister();
          $timeout(function () {
            callback();
            postDigest(callback);
          }, 0, false);
        });
      }

      postDigest(function () {
        snappyappsRefresh();
      })
    }
  };
});