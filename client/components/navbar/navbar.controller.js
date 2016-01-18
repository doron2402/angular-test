'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }, {
    'title': 'Search',
    'state': 'search'
  },{
    'title': 'Profile',
    'state': 'profile'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.isArtist = Auth.isArtist;
  }
}

angular.module('heartApp')
  .controller('NavbarController', NavbarController);
