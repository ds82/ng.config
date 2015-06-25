# ng.config

## problem

You almost always need a central config in your angular app. May it be for the root URL for your server API, the default language, the default theme or whatever parameter you may configure in your app.

## solution

This module provides a super-simple $config service for your angular app.

## usage

```js
angular.module('app', ['ng.config'])
  .run(Setup);

Setup.$inject = ['$config'];
function Setup($config) {
  $config.SERVER_BASE = 'api/v1/';
}
```

All your services can than use this config:

```js
angular.module('some.module', ['ng.config'])
  .service('SomeService', Service);

SomeService.$inject = ['$config', '$resource'];
function SomeService($config, $resource) {
  return $resource($config.SERVER_BASE + 'some',
  // ...
  );
}
```

