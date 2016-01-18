'use strict';

(function() {

class SearchController {

  constructor($http) {
    this.$http = $http;
    this.artists = [];
    $http.get('/api/artists').then(response => {
      this.artists = response.data;
    });
  }
}

angular.module('heartApp')
  .controller('SearchController', SearchController);

})();
