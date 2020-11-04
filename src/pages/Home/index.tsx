import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import logoImg from '../../assets/logo.png';
import Card from '../../components/Card';

import * as Styles from './styles';

const Home: React.FC = () => {
  return (
    <Styles.Container>
      <Styles.Header
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 1,
          shadowRadius: 16.0,
          elevation: 60,
        }}>
        <Styles.Image source={logoImg} />
      </Styles.Header>

      <Styles.ActionsContainer>
        <Styles.TextInput placeholder="Pesquisar" />
        <Styles.Button>
          <Icon name="plus" size={20} color="#FFF" />
        </Styles.Button>
      </Styles.ActionsContainer>

      <Styles.MainContent>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Styles.MainContent>
    </Styles.Container>
  );
};

export default Home;
