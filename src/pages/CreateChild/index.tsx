import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import api from '../../services/api';

import Icon from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';
import DatePickerInput from '../../components/DatePickerInput';
import DecimalInput from '../../components/DecimalInput';

import heightImg from '../../assets/height.png';
import kgImg from '../../assets/kg.png';
import calendarImg from '../../assets/calendar.png';
import nameImg from '../../assets/name.png';

import { Strong } from '../../components/DatePickerInput/styles';
import * as Styles from './styles';

const CreateChild: React.FC = () => {
  const [name, setName] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [birthDate, setBirthDate] = React.useState(new Date());
  const [showBirthDatePicker, setShowBirthDatePicker] = React.useState(false);
  const [measuredDate, setMeasuredDate] = React.useState(new Date());
  const [showMeasuredDatePicker, setShowMeasuredDatePicker] = React.useState(
    false,
  );
  const [imc, setImc] = React.useState(0);

  const navigation = useNavigation();

  React.useEffect(() => {
    const heightParsed = height.replace(',', '.');
    const newImc = (
      Number(weight) /
      (Number(heightParsed) * Number(heightParsed))
    ).toString();

    const newImcParsed = Number(parseFloat(newImc).toFixed(2));

    setImc(newImcParsed);
  }, [weight, height]);

  const handleNavigationToHome = React.useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const handleValidation = React.useCallback(() => {
    if (name === '' || weight === '' || height === '') {
      return ToastAndroid.show(
        'Preencha todas as informações!',
        ToastAndroid.SHORT,
      );
    }
  }, [height, name, weight]);

  const handleSubmitNewChild = React.useCallback(async () => {
    handleValidation();

    try {
      await api.post('/childs.json', {
        name,
        birthdate: birthDate,
        measured_date: measuredDate,
        weight,
        height,
      });

      handleNavigationToHome();
    } catch (e) {
      // tratar erros aq
    }
  }, [
    handleValidation,
    name,
    birthDate,
    measuredDate,
    weight,
    height,
    handleNavigationToHome,
  ]);

  return (
    <Styles.Container>
      <Header />

      <Styles.Nav>
        <Styles.Button onPress={handleNavigationToHome}>
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
              type={'WEIGHT'}
              value={weight}
              setValue={setWeight}
              maxLength={6}
            />
            <Styles.IconBlock>
              <Styles.Image source={kgImg} />
            </Styles.IconBlock>
          </Styles.InputBlock>
          <Styles.InputBlock>
            <DecimalInput
              placeholder="Altura"
              type={'HEIGHT'}
              value={height}
              setValue={setHeight}
              maxLength={5}
            />
            <Styles.IconBlock>
              <Styles.Image source={heightImg} />
            </Styles.IconBlock>
          </Styles.InputBlock>
        </Styles.View>
        <Styles.ImcPreview>
          IMC: <Strong>{imc ? imc : 'Preencha os valores'}</Strong>
        </Styles.ImcPreview>
        <Styles.SubmitButton onPress={handleSubmitNewChild}>
          <Styles.ButtonText>Criar</Styles.ButtonText>
        </Styles.SubmitButton>
      </Styles.Form>
    </Styles.Container>
  );
};

export default CreateChild;
