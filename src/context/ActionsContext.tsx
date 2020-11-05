import React from 'react';

interface ActionsContextProps {
  createChild: (param: DataProps) => void;
  childrenData: DataProps[];
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
  const [childrenData, setChildrenData] = React.useState<DataProps[] | never[]>(
    [],
  );

  const createChild = React.useCallback(
    ({ name, birthDate, measuredDate, weight, height }: DataProps) => {
      console.log({ name, birthDate, measuredDate, weight, height });
      setChildrenData((state) => [
        ...state,
        { name, birthDate, measuredDate, weight, height },
      ]);
    },
    [],
  );

  React.useEffect(() => {
    console.log(childrenData);
  }, [childrenData]);

  return (
    <ActionsContext.Provider value={{ createChild, childrenData }}>
      {children}
    </ActionsContext.Provider>
  );
};
