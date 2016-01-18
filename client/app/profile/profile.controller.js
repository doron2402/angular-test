'use strict';

(function() {

class ProfileController {

  constructor($http, Auth) {
    this.$http = $http;
    this.user = Auth.getCurrentUser();
    this.isArtist = Auth.isArtist();
    
    if (!!this.isArtist){
      $http.get('/api/artists/' + this.user.artist).then(response => {
        this.artist = response.data;
        console.log('this.artist');
        console.log(response);
      });
    }
  }

  updateArtist() {
    // this.$http.post('/api/artists/' + this.user.artist).then(response => {
    this.$http.post('/api/artists/569c64ba3e9a67fcfad16951').then(response => {
      console.log(response);
    });
  }

}

angular.module('heartApp')
  .controller('ProfileController', ProfileController);

})();
