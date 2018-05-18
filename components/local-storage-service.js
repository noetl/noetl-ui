this.$storageService = function () {
  'use strict';
  function eqNull(value) {
    return (((typeof value) === 'undefined') || (value === null) || (value === ''));
  }
  function StorageService() {
    this.VERSION_STORAGE = '0.0.0';
  }
  StorageService.prototype.set = function (key, data) {
    localStorage.setItem(key + this.VERSION_STORAGE, data);
  };
  StorageService.prototype.get = function (key) {
    return localStorage.getItem(key + this.VERSION_STORAGE);
  };
  StorageService.prototype.setObject = function (key, data) {
    localStorage.setItem(key + this.VERSION_STORAGE, JSON.stringify(data));
  };
  StorageService.prototype.getObject = function (key) {
    let val = localStorage.getItem(key + this.VERSION_STORAGE);
    if (eqNull(val)) {
      return null;
    }
    return JSON.parse(val);
  };
  StorageService.prototype.remove = function (key) {
    localStorage.removeItem(key + this.VERSION_STORAGE);
  };
  StorageService.prototype.get = function (key) {
    return localStorage.getItem(key + this.VERSION_STORAGE);
  };

  return new StorageService();
}();
