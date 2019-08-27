import React from 'react';

export const DataGridContext = React.createContext({});
export const DataGridProvider = DataGridContext.Provider;
export const DataGridConsumer = DataGridContext.Consumer;

// High order component to wrap a component with the datagrid context
export const withContext = Component => props => (
  <DataGridConsumer>{context => <Component {...context} {...props} />}</DataGridConsumer>
);

export const withProvider = Component => props => (
  <DataGridProvider value={props}>
    <Component {...props} />
  </DataGridProvider>
);
