import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface ActionsContextProps {
  createChild: (param: DataProps) => void;
  getChildren: () => Promise<string | null>;
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
    async ({
      id,
      name,
      birthDate,
      measuredDate,
      weight,
      height,
    }: DataProps) => {
      const childData = { id, name, birthDate, measuredDate, weight, height };
      setChildrenData((state) => [...state, childData]);

      await AsyncStorage.setItem(
        '@PimposCrud:children',
        JSON.stringify(childrenData),
      );
    },
    [childrenData],
  );

  const getChildren = React.useCallback(async () => {
    const storageChildData = await AsyncStorage.getItem('@PimposCrud:children');

    return storageChildData;
  }, []);

  return (
    <ActionsContext.Provider value={{ createChild, getChildren }}>
      {children}
    </ActionsContext.Provider>
  );
};
