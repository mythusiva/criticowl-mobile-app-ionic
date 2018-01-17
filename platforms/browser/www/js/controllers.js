angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('MovieListCtrl', function($scope, DataProvider) {
  $scope.title = 'Now playing';
  $scope.movies = DataProvider.getMovies();
  $scope.doRefresh = function() {
    DataProvider.fetchNewMovies(function() {
      $scope.movies = DataProvider.getMovies();
      $scope.$broadcast('scroll.refreshComplete');
    });
  }
})

.controller('MovieDetailsCtrl', function($scope, $stateParams, DataProvider) {
  $scope.movieDetails = DataProvider.getMovie($stateParams.id);
  $scope.openLink = function (url) {
    window.open(url,'_system');
  }
})

;
