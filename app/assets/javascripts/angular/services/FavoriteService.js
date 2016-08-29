function FavoriteService($http) {

    this.addFavorite = function(lectureId, $scope, userId) {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/' + userId + '/add_favorite',
     })
    };
}

FavoriteService.$inject = ['$http']

angular.module('Flatcasts').service('FavoriteService', FavoriteService);
