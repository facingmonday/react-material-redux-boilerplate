import { buildUrl, getCookie } from '../utils';

export function fetchMe() {
  const url = buildUrl('/api/users/me');
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('tf-auth')}`,
    }),
    timeout: 5000,
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      const e = new Error();
      e.code = 401;
      throw e;
    })
    ;
}
export function loginUser(credentials) {
  const url = buildUrl('/auth/local');
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('tf-auth')}`,
    }),
    mode: 'cors',
    body: JSON.stringify(credentials),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      if (response.status === 401) {
        const e = new Error();
        e.code = 401;
        throw e;
      }
      return {};
    })
    ;
}