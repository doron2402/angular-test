'use strict';

(function() {

class ArtistController {
  constructor(Artist) {
    this.artists = Artist.query();
  }

}

angular.module('heartApp.artist')
  .controller('ArtistController', ArtistController);

})();
