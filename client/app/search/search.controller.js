'use strict';

(function() {

class SearchController {

  constructor($http) {
    this.$http = $http;
    this.awesomeThings = [];

    $http.get('/api/artists').then(response => {
      console.log(response);
      this.artists = response.data;
    });
  }
}

angular.module('heartApp')
  .controller('SearchController', SearchController);

})();
