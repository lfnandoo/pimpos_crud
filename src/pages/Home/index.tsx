import React from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/Feather';

import { Card, Header } from '../../components';

import * as Styles from './styles';

interface dataProps {
  name: string;
  birthdate: string | Date;
  cephalic_perimeter: string;
  measured_date: string | Date;
  weight: string;
  height: string;
}

const Home: React.FC<dataProps> = () => {
  const navigation = useNavigation();
  const isPageFocused = useIsFocused();

  const [childrenData, setChildrenData] = React.useState<dataProps[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [reload, setReload] = React.useState(false);

  React.useEffect(() => {
    if (isPageFocused || reload) {
      (async () => {
        try {
          const { data } = await api.get('childs.json');

          setChildrenData(data);
          setIsLoading(false);
        } catch (e) {
          // tratar erros aq
          console.log(e);
        }
      })();
    }
  }, [isPageFocused, reload]);

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
        <Styles.EmptyChild>{isLoading && 'Carregando...'}</Styles.EmptyChild>
        {childrenData ? (
          Object.keys(childrenData).map((key: any) => (
            <Card
              key={key}
              cardKey={key}
              name={childrenData[key].name}
              birthDate={childrenData[key].birthdate}
              cephalicPerimeter={childrenData[key].cephalic_perimeter}
              measuredDate={childrenData[key].measured_date}
              weight={childrenData[key].weight}
              height={childrenData[key].height}
              reloadPage={setReload}
            />
          ))
        ) : (
          <Styles.EmptyChild>Nenhuma criança cadastrada.</Styles.EmptyChild>
        )}
      </Styles.MainContent>
    </Styles.Container>
  );
};

export default Home;
