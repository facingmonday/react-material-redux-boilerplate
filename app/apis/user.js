import { buildUrl } from './utils';

export function fetchUsers() {
  const url = buildUrl(`/api/users`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('tf-auth')}`,
    }),
    mode: 'cors',
    credentials: 'include',
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
export function fetchUser(userId) {
  const url = buildUrl(`/users/${userId}`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('tf-auth')}`,
    }),
    mode: 'cors',
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
export function createUser(user) {
  const url = buildUrl('/user');
  return fetch(url, {
    method: 'POST',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('tf-auth')}`,
    }),
    mode: 'cors',
    body: JSON.stringify(user)
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
export function updateUser(user) {
  const url = buildUrl(`/users/${user.id}`);
  return fetch(url, {
    method: 'PUT',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('tf-auth')}`,
    }),
    mode: 'cors',
    body: JSON.stringify(user),
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
export function deleteUser(userId) {
  const url = buildUrl(`/users/${userId}`);
  return fetch(url, {
    method: 'DELETE',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getCookie('tf-auth')}`,
    }),
    mode: 'cors',
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
