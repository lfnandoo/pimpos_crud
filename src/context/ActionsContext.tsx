import React from 'react';

interface ActionsContextProps {
  createChild: (param: DataProps) => void;
  childrenData: DataProps[];
}

interface DataProps {
  id: string;
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
  const [childrenData, setChildrenData] = React.useState<DataProps[] | never[]>(
    [],
  );

  const createChild = React.useCallback(
    ({ id, name, birthDate, measuredDate, weight, height }: DataProps) => {
      setChildrenData((state) => [
        ...state,
        { id, name, birthDate, measuredDate, weight, height },
      ]);
      console.log('crio');
    },
    [],
  );

  return (
    <ActionsContext.Provider value={{ createChild, childrenData }}>
      {children}
    </ActionsContext.Provider>
  );
};
