function AddFavoriteService($http) {

    this.addFavorite = function(lectureId, $scope, userId) {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/' + userId + '/add_favorite',
     })
    };
}

AddFavoriteService.$inject = ['$http']

angular.module('Flatcasts').service('AddFavoriteService', AddFavoriteService);
