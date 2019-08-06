import { COOKIE_NAME } from '../../config/constants';
import { buildUrl, getCookie } from '../utils';

export function fetchUsers() {
  const url = buildUrl(`/api/users`);
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
    console.log('response', response);
    if (response.status === 200) {
      return response.json();
    }
    const e = new Error();
    e.code = response.status;
    throw e;
  });
}
export function fetchUser(userId) {
  const url = buildUrl(`/api/users/${userId}`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie(COOKIE_NAME)}`,
    }),
    mode: 'cors',
  }).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 401) {
      const e = new Error();
      e.code = 401;
      throw e;
    }
    return {};
  });
}
export function createUser(user) {
  const url = buildUrl('/api/users');
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie(COOKIE_NAME)}`,
    }),
    mode: 'cors',
    body: JSON.stringify(user),
  }).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 401) {
      const e = new Error();
      e.code = 401;
      throw e;
    }
    return {};
  });
}
export function updateUser(user) {
  const url = buildUrl(`/api/users/${user.id}`);
  return fetch(url, {
    method: 'PUT',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie(COOKIE_NAME)}`,
    }),
    mode: 'cors',
    body: JSON.stringify(user),
  }).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 401) {
      const e = new Error();
      e.code = 401;
      throw e;
    }
    return {};
  });
}
export function deleteUser(userId) {
  const url = buildUrl(`/api/users/${userId}`);
  return fetch(url, {
    method: 'DELETE',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie(COOKIE_NAME)}`,
    }),
    mode: 'cors',
  }).then(response => {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 401) {
      const e = new Error();
      e.code = 401;
      throw e;
    }
    return {};
  });
}
