import { COOKIE_NAME } from '../../config/constants';
import { buildUrl, getCookie } from '../utils';

export function fetchDashboard() {
  const url = buildUrl(`/api/dashboard`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie(COOKIE_NAME)}`,
    }),
    mode: 'cors',
    credentials: 'include',
  }).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    const e = new Error();
    e.code = response.status;
    throw e;
  });
}
