import React from 'react';

interface ActionsContextProps {
  createChild: (param: DataProps) => void;
}

interface DataProps {
  name: string;
  age: string;
  measuredDate: string | Date;
  weight: string;
  height: string;
}

export const ActionsContext = React.createContext<ActionsContextProps>(
  {} as ActionsContextProps,
);

export const Actions: React.FC = ({ children }) => {
  const createChild = React.useCallback(
    ({ name, age, measuredDate, weight, height }) => {
      console.log({ name, age, measuredDate, weight, height });
    },
    [],
  );

  return (
    <ActionsContext.Provider value={{ createChild }}>
      {children}
    </ActionsContext.Provider>
  );
};
