'use strict';

var $$get = require('lodash/object/get');
var $$set = require('lodash/object/set');

angular.module('ng.config', [])
  .provider('$config', ConfigProvider);

var service = new ConfigService();

// make service available outside fo angular
module.exports = service;

function ConfigProvider() {
  var vm = this;

  vm.$get = $get;
  vm.set = service.$.set;
  vm.get = service.$.get;

  function $get() {
    return service;
  }
}

function ConfigService() {
  var vm = this;

  vm.$ = {};
  vm.$.load = load;
  vm.$.get = get;
  vm.$.set = set;

  function get(path, def) {
    return $$get(vm, path, def);
  }

  function set(path, value) {
    return $$set(vm, path, value);
  }

  function load(data) {
    for (var key in data) {
      vm[key] = data[key];
    }
  }
}
