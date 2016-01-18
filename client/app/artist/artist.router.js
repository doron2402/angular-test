'use strict';

angular.module('heartApp.artist')
  .config(function($stateProvider) {
    $stateProvider
      .state('artist', {
        url: '/artist',
        templateUrl: 'app/artist/artist.html',
        controller: 'ArtistController',
        controllerAs: 'artist',
        authenticate: 'artist'
      });
  });
