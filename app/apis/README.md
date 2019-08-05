## API functions

This folder contains the api functions that are called by the saga's.

```
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
      console.log('response', response);
      if (response.status === 200) {
        return response.json();
      }
      const e = new Error();
      e.code = response.status;
      throw e;
    })
    ;
}
```

The api function uses the native fetch method. The response should handle a valid response,
all other response should throw an error to be handled by the saga.
