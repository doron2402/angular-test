'use strict';

angular.module('heartApp.auth', [
  'heartApp.constants',
  'heartApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
