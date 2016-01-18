'use strict';

(function() {

class ProfileController {

  constructor($http, Auth) {
    this.$http = $http;
    this.isArtist = Auth.isArtist;
    this.user = Auth.getCurrentUser();
    if (this.isArtist){

      $http.get('/api/artists/' + this.user.artist).then(response => {

        this.artist = response.data[0];
        console.log(this.artist);
      });
    }
  }

}

angular.module('heartApp')
  .controller('ProfileController', ProfileController);

})();
