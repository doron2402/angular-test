(function(angular, undefined) {
'use strict';

angular.module('heartApp.constants', [])

.constant('appConfig', {userRoles:['guest','user', 'artist','admin']})

;
})(angular);
