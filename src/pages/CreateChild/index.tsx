import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActionsContext } from '../../context/ActionsContext';
import { ToastAndroid } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';
import DatePickerInput from '../../components/DatePickerInput';
import DecimalInput from '../../components/DecimalInput';

import heightImg from '../../assets/height.png';
import kgImg from '../../assets/kg.png';
import calendarImg from '../../assets/calendar.png';
import nameImg from '../../assets/name.png';

import * as Styles from './styles';

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

  const handleValidation = React.useCallback(() => {
    if (name === '' || weight === '' || height === '') {
      return ToastAndroid.show(
        'Preencha todas as informações!',
        ToastAndroid.SHORT,
      );
    }

    createChild({
      name,
      weight,
      height,
      birthDate,
      measuredDate,
    });
  }, [createChild, birthDate, height, measuredDate, name, weight]);

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
        <Styles.InputBlock>
          <Styles.TextInput
            placeholder="Nome"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Styles.IconBlock>
            <Styles.Image source={nameImg} />
          </Styles.IconBlock>
        </Styles.InputBlock>
        <Styles.InputBlock>
          <DatePickerInput
            showDatePicker={showBirthDatePicker}
            setShowDatePicker={setShowBirthDatePicker}
            date={birthDate}
            setDate={setBirthDate}
            placeholder="Nascimento"
          />
          <Styles.IconBlock>
            <Styles.Image source={calendarImg} />
          </Styles.IconBlock>
        </Styles.InputBlock>
        <Styles.InputBlock>
          <DatePickerInput
            showDatePicker={showMeasuredDatePicker}
            setShowDatePicker={setShowMeasuredDatePicker}
            date={measuredDate}
            setDate={setMeasuredDate}
            placeholder="Data Medida"
          />
          <Styles.IconBlock>
            <Styles.Image source={calendarImg} />
          </Styles.IconBlock>
        </Styles.InputBlock>
        <Styles.View>
          <Styles.InputBlock>
            <DecimalInput
              placeholder="Peso"
              value={weight}
              setValue={setWeight}
            />
            <Styles.IconBlock>
              <Styles.Image source={kgImg} />
            </Styles.IconBlock>
          </Styles.InputBlock>
          <Styles.InputBlock>
            <DecimalInput
              placeholder="Altura"
              value={height}
              setValue={setHeight}
            />
            <Styles.IconBlock>
              <Styles.Image source={heightImg} />
            </Styles.IconBlock>
          </Styles.InputBlock>
        </Styles.View>
        <Styles.SubmitButton onPress={handleValidation}>
          <Styles.ButtonText>Criar</Styles.ButtonText>
        </Styles.SubmitButton>
      </Styles.Form>
    </Styles.Container>
  );
};

export default CreateChild;
