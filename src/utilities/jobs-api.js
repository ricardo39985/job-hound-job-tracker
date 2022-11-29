import sendRequest from './send-request';
const BASE_URL = '/api/jobs';

export async function add(jobData) {
  return sendRequest(BASE_URL, 'POST', jobData);
}

export async function login(userData) {
  return sendRequest(`${BASE_URL}/login`, 'POST', userData);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
