import React from 'react';

export const ActionsContext = React.createContext({});

export const Actions: React.FC = ({ children }) => {
  const createChild = React.useCallback(
    ({ name, age, meansuredDate, weight, height }) => {
      console.log({ name, age, meansuredDate, weight, height });
    },
    [],
  );

  return (
    <ActionsContext.Provider value={{ createChild }}>
      {children}
    </ActionsContext.Provider>
  );
};
