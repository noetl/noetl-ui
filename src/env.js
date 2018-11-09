// all env shell have 'NOETL_' prefix
let backendUrl = process.env.NOETL_BACKEND_URL;
if (!backendUrl) {
  backendUrl = 'http://localhost:8888';
}
let login = process.env.NOETL_LOGIN;
if (!login) {
  login = 'noetl';
}
let password = process.env.NOETL_PASSWORD;
if (!password) {
  password = 'noetl';
}
export const BACKEND_URL = backendUrl;
export const LOGIN = login;
export const PASSWORD = password;
