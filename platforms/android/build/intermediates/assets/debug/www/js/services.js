angular.module('starter.services', [])

.factory('DataProvider',function($http) {
  
  var movies = [];

  return  {
    getMovie: function(id) {
      for (var i = movies.length - 1; i >= 0; i--) {
        if(movies[i].id === id) {
          return movies[i];
        }
      };
    },
    getMovies: function() {
      return movies;
    },
    fetchNewMovies: function(callback) {
      $http({
        method: 'GET',
        url: 'http://api.criticowl.com/api/get_recent_movies_list'
      }).then(function successCallback(response) {
        movies = response.data.result;
        callback();
      }, function errorCallback(response) {
      });
    }
  };
  
});