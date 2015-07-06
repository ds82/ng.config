'use strict';

angular.module('ng-app-config', [])
  .service('$config', Config);

function Config() {
  var vm = this;
  vm.$ ={'load': loadObject};

  function loadObject(data) {
    for (var key in data) {
      vm.key = data.key;
    }
  }
}
