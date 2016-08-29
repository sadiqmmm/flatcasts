function AddFavoriteService($http) {

    this.addFavorite = function(lectureId, $scope) {
    $http({
      method  : 'PUT',
      url     : '/api/lectures/' + lectureId + '/add_favorite',
     })
    };
}

AddFavoriteService.$inject = ['$http']

angular.module('Flatcasts').service('AddFavoriteService', AddFavoriteService);
