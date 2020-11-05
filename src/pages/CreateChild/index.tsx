import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActionsContext } from '../../context/ActionsContext';

import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';

import * as Styles from './styles';
import DatePickerInput from '../../components/DatePickerInput';

const CreateChild: React.FC = () => {
  const { createChild } = React.useContext(ActionsContext);

  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [birthDate, setBirthDate] = React.useState(new Date());
  const [showBirthDatePicker, setShowBirthDatePicker] = React.useState(false);
  const [measuredDate, setMeasuredDate] = React.useState(new Date());
  const [showMeasuredDatePicker, setShowMeasuredDatePicker] = React.useState(
    false,
  );

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
        <DatePickerInput
          showDatePicker={showBirthDatePicker}
          setShowDatePicker={setShowBirthDatePicker}
          date={birthDate}
          setDate={setBirthDate}
          placeholder="Data de Nascimento"
        />
        <DatePickerInput
          showDatePicker={showMeasuredDatePicker}
          setShowDatePicker={setShowMeasuredDatePicker}
          date={measuredDate}
          setDate={setMeasuredDate}
          placeholder="Data Medida"
        />
        <Styles.TextInput
          placeholder="Peso"
          keyboardType="decimal-pad"
          maxLength={2}
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
        <Styles.TextInput
          placeholder="Altura (145)"
          keyboardType="decimal-pad"
          maxLength={3}
          value={height}
          onChangeText={(text) => setHeight(text)}
        />
        <Styles.SubmitButton>
          <Styles.ButtonText
            onPress={() =>
              createChild({
                name,
                birthDate,
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
