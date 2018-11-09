import {getObject} from "../LocalStorage";
import {LOGIN, PASSWORD} from "../env";

const AUTHORIZATION = getObject("AUTHORIZATION");
let isAuthenticated = false;
if (AUTHORIZATION != null) {
  if (AUTHORIZATION.login === LOGIN && AUTHORIZATION.password === PASSWORD) {
    isAuthenticated = true;
  }
}
export default {
  isAuthenticated: isAuthenticated,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
}
