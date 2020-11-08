import React from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';

import { Header, DatePickerInput, DecimalInput } from '../../components';

import {
  brainImg,
  heightImg,
  kgImg,
  calendarImg,
  birthdateImg,
  nameImg,
} from '../../assets';

import { Strong } from '../../components/DatePickerInput/styles';
import { EmptyChild } from '../Home/styles';
import * as Styles from './styles';

interface EditChildProps {
  route: RouteProp<{ params: { cardKey: string } }, 'params'>;
}

interface ResponseDataProps {
  name: string;
  birthdate: string;
  measured_date: string;
  cephalic_perimeter: string;
  weight: string;
  height: string;
}

const EditChild: React.FC<EditChildProps> = ({ route }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [name, setName] = React.useState('');
  const [cephalicPerimeter, setCephalicPerimeter] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [birthDate, setBirthDate] = React.useState<Date | null>(null);
  const [showBirthDatePicker, setShowBirthDatePicker] = React.useState(false);
  const [measuredDate, setMeasuredDate] = React.useState<Date | null>(null);
  const [showMeasuredDatePicker, setShowMeasuredDatePicker] = React.useState(
    false,
  );
  const [imc, setImc] = React.useState(0);

  const navigation = useNavigation();

  const { cardKey } = route.params;

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<ResponseDataProps>(
          `/childs/${cardKey}.json`,
        );

        setIsLoading((state) => !state);

        setName(data.name);
        setBirthDate(new Date(data.birthdate));
        setMeasuredDate(new Date(data.measured_date));
        setCephalicPerimeter(data.cephalic_perimeter);
        setWeight(data.weight);
        setHeight(data.height);
      } catch (e) {
        // tratar erros
        navigation.navigate('Home');
        ToastAndroid.show(
          'Desculpe, ocorreu um erro ao acessar a página!',
          ToastAndroid.SHORT,
        );
      }
    })();
  }, [cardKey, navigation]);

  React.useEffect(() => {
    if (weight === '' || height === '') {
      setImc(0);
    } else {
      const heightParsed = height.replace(',', '.');
      const newImc = (
        Number(weight) /
        (Number(heightParsed) * Number(heightParsed))
      ).toString();

      const newImcParsed = Number(parseFloat(newImc).toFixed(2));

      setImc(newImcParsed);
    }
  }, [weight, height]);

  const handleNavigationToHome = React.useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  const handleValidation = React.useCallback(() => {
    if (
      !!name &&
      !!cephalicPerimeter &&
      !!weight &&
      !!height &&
      !!birthDate &&
      !!measuredDate
    ) {
      return true;
    } else {
      return false;
    }
  }, [birthDate, cephalicPerimeter, height, measuredDate, name, weight]);

  const handleSubmitNewChild = React.useCallback(async () => {
    const isValid = handleValidation();

    if (isValid) {
      try {
        await api.post('/childs.json', {
          name,
          birthdate: birthDate,
          measured_date: measuredDate,
          cephalic_perimeter: cephalicPerimeter,
          weight,
          height,
        });

        handleNavigationToHome();
        ToastAndroid.show(
          `${name} foi editado(a) com sucesso!`,
          ToastAndroid.SHORT,
        );
      } catch (e) {
        // tratar erros aq
      }
    } else {
      ToastAndroid.show('Preencha todas as informações!', ToastAndroid.SHORT);
    }
  }, [
    handleValidation,
    name,
    birthDate,
    measuredDate,
    cephalicPerimeter,
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
        <Styles.Text>Editar Criança</Styles.Text>
      </Styles.Nav>
      {isLoading ? (
        <EmptyChild>Carregando...</EmptyChild>
      ) : (
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
              <Styles.Image source={birthdateImg} />
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
          <Styles.InputBlock>
            <DecimalInput
              placeholder="Perímetro Cefálico"
              type={'CEPHALIC_PERIMETER'}
              value={cephalicPerimeter}
              setValue={setCephalicPerimeter}
              maxLength={5}
            />
            <Styles.IconBlock>
              <Styles.Image source={brainImg} />
            </Styles.IconBlock>
          </Styles.InputBlock>
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
          <Styles.ImcPreview>
            IMC: <Strong>{imc ? imc : 'Preencha todos os valores'}</Strong>
          </Styles.ImcPreview>
          <Styles.SubmitButton onPress={handleSubmitNewChild}>
            <Styles.ButtonText>Editar</Styles.ButtonText>
          </Styles.SubmitButton>
        </Styles.Form>
      )}
    </Styles.Container>
  );
};

export default EditChild;
