'use strict';

angular.module('ng.config', [])
  .service('$config', Config);

function Config() {
  var vm = this;

  vm.$ = {};
  vm.$.load = load;

  function load(data) {
    for (var key in data) {
      vm[key] = data[key];
    }
  }
}
