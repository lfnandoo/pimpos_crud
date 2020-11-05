import React from 'react';

interface ActionsContextProps {
  createChild: (param: DataProps) => void;
}

interface DataProps {
  name: string;
  birthDate: string | Date;
  measuredDate: string | Date;
  weight: string;
  height: string;
}

export const ActionsContext = React.createContext<ActionsContextProps>(
  {} as ActionsContextProps,
);

export const Actions: React.FC = ({ children }) => {
  const createChild = React.useCallback(
    ({ name, birthDate, measuredDate, weight, height }: DataProps) => {
      console.log({ name, birthDate, measuredDate, weight, height });
    },
    [],
  );

  return (
    <ActionsContext.Provider value={{ createChild }}>
      {children}
    </ActionsContext.Provider>
  );
};
