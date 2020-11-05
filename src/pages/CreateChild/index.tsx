import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActionsContext } from '../../context/ActionsContext';

import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';
import heightImg from '../../assets/height.png';
import kgImg from '../../assets/kg.png';

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

  function onChangeAcceptOnlyNumbers(text: string) {
    let inputValue = text.replace(/\D/g, '');
    setWeight(inputValue);
  }

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
        <Styles.View>
          <Styles.InputBlock>
            <Styles.DecimalInput
              placeholder="Peso"
              keyboardType="decimal-pad"
              maxLength={4}
              value={weight}
              onChangeText={onChangeAcceptOnlyNumbers}
            />
            <Styles.IconBlock>
              <Styles.Image source={kgImg} />
            </Styles.IconBlock>
          </Styles.InputBlock>
          <Styles.InputBlock>
            <Styles.DecimalInput
              placeholder="Altura"
              keyboardType="decimal-pad"
              maxLength={4}
              value={height}
              onChangeText={(text) => setHeight(text)}
            />
            <Styles.IconBlock>
              <Styles.Image source={heightImg} />
            </Styles.IconBlock>
          </Styles.InputBlock>
        </Styles.View>
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
