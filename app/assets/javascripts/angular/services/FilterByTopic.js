// Functions - Definitions
function FilterByTopic() {
  // Variables - Private
  var self = this;

  // Variables - Public
  self.filter = {};

  // Functions - Public
  self.filterByCategory = filterByCategory;
  self.getCategories = getCategories;

  function getCategories() {
    return (self.wines || []).
      map(function (wine) { return wine.category; }).
      filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
  }

  function noFilter(filterObj) {
    return Object.
      keys(filterObj).
      every(function (key) { return !filterObj[key]; });
  }
};

angular.module('Flatcasts').service('FilterByTopic', FilterByTopic);
