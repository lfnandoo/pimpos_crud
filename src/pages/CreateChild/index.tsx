import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';

import * as Styles from './styles';

const CreateChild: React.FC = () => {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [measuredDate, setMeasureDate] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');

  const navigation = useNavigation();

  return (
    <Styles.Container>
      <Header />

      <Styles.Nav>
        <Styles.Button onPress={() => navigation.navigate('Home')}>
          <Icon name="chevron-left" size={25} color="black" />
        </Styles.Button>
        <Styles.Text>Criar Criança</Styles.Text>
      </Styles.Nav>
      <Styles.Form>
        <Styles.TextInput
          placeholder="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Styles.TextInput
          placeholder="Idade"
          value={age}
          onChangeText={(text) => setAge(text)}
        />
        <Styles.TextInput
          placeholder="Data Medida"
          value={measuredDate}
          onChangeText={(text) => setMeasureDate(text)}
        />
        <Styles.TextInput
          placeholder="Peso"
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
        <Styles.TextInput
          placeholder="Altura"
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
        <Styles.SubmitButton>
          <Styles.ButtonText
            onPress={() =>
              console.log({
                name,
                age,
                measuredDate,
                weight,
                height,
              })
            }>
            Criar
          </Styles.ButtonText>
        </Styles.SubmitButton>
      </Styles.Form>
    </Styles.Container>
  );
};

export default CreateChild;
