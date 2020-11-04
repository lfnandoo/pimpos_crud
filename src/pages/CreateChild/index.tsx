import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';

import * as Styles from './styles';
import { ActionsContext } from '../../context/ActionsContext';

const CreateChild: React.FC = () => {
  const { createChild }: any = React.useContext(ActionsContext);
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
          <Icon name="chevron-left" size={25} color="rgba(0, 0, 0, .7)" />
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
              createChild({
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
