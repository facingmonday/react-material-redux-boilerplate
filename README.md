# React Redux Boilerplate
This is the boilerplate project for create admin apps with React, Redux, Reselect, Redux-Saga, and MaterialUI.

## Start App in Development Mode
```
npm start
```

## Start dev api server
The dev api server is a node express app ran from server.js. There is a launch config
for VSCode for debugging but you can start it manually.
```
node server.js
```

## Run Cosmos Component Dev Tools
Cosmos scans your project for components and enables you to render components under any combination of props,
context and state, mock every external dependency (eg. API responses, localStorage, etc) and see app state evolve 
in real-time while interacting with running instances
```
npm run cosmos
```

## Code Snippets
Snippets are included for vscode to generate a number of reusable components. Type `mc_` to get a list of available options.

## Development Tools

#### Chrome
[React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

[Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)

#### VSCode
React
jawandarajbir.react-vscode-extension-pack

ESLint
dbaeumer.vscode-eslint


## Folder Structure

#### /actions
Action creator functions that are dispatched from the sagas and containers. Action types are defined as constants, imported
from the domains constants config.

#### /api
All api requests for a domain should exist here. The api function uses the native fetch method. The response should handle a valid response,
all other response should throw an error to be handled by the saga.

#### /components
Presentational components. There are some base components included in the boilerplate which can be modified. App specific
components will also go here.

#### /containers
Container components source the data and deal with state. State is then passed to presentational components as props which is then rendered into views.

#### /hocs
High order components that can wrap other components giving them additional functionality include access to the redux store.

#### /layouts
High order components used for routing and rendering container components.

#### /reducers
Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened,
but don't describe how the application's state changes.

[View More](https://redux.js.org/basics/reducers)

#### /sagas
`redux-saga` is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

[View More](https://github.com/redux-saga/redux-saga)

#### /selectors
The boilerplate uses Reselect as a memoized selection library.

* Selectors can compute derived data, allowing Redux to store the minimal possible state.
* Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
* Selectors are composable. They can be used as input to other selectors.

[View More](https://github.com/reduxjs/reselect)

#### /theme

## Dev Server
There is a node instance setup in server.js to stub in an api that can accept requests. It is a restfull
api and can be added to using the `mc_server_api` snippet for quickly adding a route.