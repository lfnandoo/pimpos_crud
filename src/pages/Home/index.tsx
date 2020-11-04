import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import Card from '../../components/Card';
import Header from '../../components/Header';

import * as Styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

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
