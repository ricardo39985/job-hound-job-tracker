import sendRequest from './send-request';
const BASE_URL = '/api/jobs';

export async function add(jobData) {
  return sendRequest(BASE_URL, 'POST', jobData);
}

export async function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function deleteJob(job) {
  return sendRequest(`${BASE_URL}`, 'DELETE', job);
}
export function changeStatus(job) {
  console.log(job.id)
  return sendRequest(`${BASE_URL}/${job.id}`, 'POST', job);
}
