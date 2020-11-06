import React from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { ActionsContext } from '../../context/ActionsContext';

import Icon from 'react-native-vector-icons/Feather';

import Card from '../../components/Card';
import Header from '../../components/Header';

import * as Styles from './styles';

interface dataProps {
  id: string;
  name: string;
  birthDate: string | Date;
  measuredDate: string | Date;
  weight: string;
  height: string;
}

const Home: React.FC<dataProps> = () => {
  const navigation = useNavigation();
  const isPageFocused = useIsFocused();

  const { getChildren } = React.useContext(ActionsContext);

  const [childrenData, setChildrenData] = React.useState<dataProps[] | never[]>(
    [],
  );

  React.useEffect(() => {
    (async () => {
      const response = await getChildren();
      if (response) {
        const parsedResponse = JSON.parse(response);
        setChildrenData(parsedResponse);
      }
    })();
  }, [getChildren, isPageFocused]);

  return (
    <Styles.Container>
      <Header />

      <Styles.ActionsContainer>
        <Styles.TextInput placeholder="Pesquisar" />
        <Styles.Button onPress={() => navigation.navigate('CreateChild')}>
          <Icon name="plus" size={20} color="#FFF" />
        </Styles.Button>
      </Styles.ActionsContainer>

      <Styles.MainContent>
        {childrenData &&
          childrenData.map((child: dataProps) => (
            <Card
              key={child.id}
              name={child.name}
              birthDate={child.birthDate}
              measuredDate={child.measuredDate}
              weight={child.weight}
              height={child.height}
            />
          ))}
      </Styles.MainContent>
    </Styles.Container>
  );
};

export default Home;
