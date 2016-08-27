function GetUserService($http) {
  this.getUser = function (id) {
    return $http.get('/api/users/' + id)
  }
};

GetUserService.$inject = ['$http'];

angular.module('Flatcasts').service('GetUserService', GetUserService);
