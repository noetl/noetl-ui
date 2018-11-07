const VERSION_STORAGE = '0.0.0';

function eqNull(value) {
  return (((typeof value) === 'undefined') || (value === null) || (value === ''));
}

export const set = function (key, data) {
  localStorage.setItem(key + VERSION_STORAGE, data);
};
export const get = function (key) {
  return localStorage.getItem(key + VERSION_STORAGE);
};
export const setObject = function (key, data) {
  localStorage.setItem(key + VERSION_STORAGE, JSON.stringify(data));
};
export const getObject = function (key) {
  let val = localStorage.getItem(key + VERSION_STORAGE);
  if (eqNull(val)) {
    return null;
  }
  return JSON.parse(val);
};
export const remove = function (key) {
  localStorage.removeItem(key + VERSION_STORAGE);
};
