App.factory('Lecture', [
  '$resource', function($resource) {
    return $resource('/api/lectures/:id', {
      id: '@id'
    });
  }
]);
