function Lecture($resource) {
    return $resource('/api/lectures/:id', {
      id: '@id'
    });
  };

Lecture.$inject = ['$resource'];

angular.module('Flatcasts').factory('Lecture', Lecture);
