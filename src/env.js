// all env shell have 'NOETL_' prefix
let backendUrl = process.env.NOETL_BACKEND_URL;
if (!backendUrl) {
  backendUrl = 'http://localhost:8888';
}
export const BACKEND_URL = backendUrl;
