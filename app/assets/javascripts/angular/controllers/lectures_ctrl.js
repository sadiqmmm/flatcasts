function LecturesCtrl($scope, Lecture, $filter) {
  var self = this;
  self.lectures = Lecture.query();

  // Filter checkboxes for topics
  self.filter = {};

  self.filterByTopic = filterByTopic;
  self.getTopics = getTopics;

  function filterByTopic(lecture) {
    return self.filter[lecture.topic] || noFilter(self.filter);
  }

  function getTopics() {
    return (self.lectures || []).
      map(function (lecture) { return lecture.topic; }).
      filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
  }

  function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }

  // Search bar for topics
  self.refilter = function () {
    self.filteredList = $filter('filter')(self.lectures, self.search)
  };
  self.refilter();
};

LecturesCtrl.$inject = ['$scope', 'Lecture', '$filter'];

angular.module('Flatcasts').controller('LecturesCtrl', LecturesCtrl);
