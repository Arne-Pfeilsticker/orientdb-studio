var browseConfig = angular.module('browse.services', []);

breadcrumb.factory('BrowseConfig', function ($rootScope, Database, $location,localStorageService) {


  var config = {
    limit: 20,
    hideSettings : true,
    keepLimit : '10',
    selectedContentType : 'JSON',
    set: function (name, val) {
      this[name] = val;
      localStorageService.add(name,val);
    },
    get: function () {

    }
  };

  return config;
});
