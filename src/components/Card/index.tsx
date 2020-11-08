import React from 'react';
import { ToastAndroid } from 'react-native';
import api from '../../services/api';

import {
  checkUnity,
  customFormatDuration,
  formatSimpleDate,
} from '../../utils';

import { editImg, deleteImg } from '../../assets';

import * as Styles from './styles';

interface CardDataProps {
  cardKey: string;
  name: string;
  birthDate: string | Date;
  measuredDate: string | Date;
  cephalicPerimeter: string;
  weight: string;
  height: string;
  reloadPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card: React.FC<CardDataProps> = ({
  cardKey,
  name,
  birthDate,
  measuredDate,
  cephalicPerimeter,
  weight,
  height,
  reloadPage,
}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [imc, setImc] = React.useState(0);

  React.useEffect(() => {
    const heightParsed = height.replace(',', '.');
    const newImc = (
      Number(weight) /
      (Number(heightParsed) * Number(heightParsed))
    ).toString();

    const newImcParsed = Number(parseFloat(newImc).toFixed(2));

    setImc(newImcParsed);
  }, [height, weight]);

  const openOrCloseModal = React.useCallback(() => {
    setModalVisible((state) => !state);
  }, []);

  const handleDeleteCard = React.useCallback(async () => {
    try {
      await api.delete(`/childs/${cardKey}.json`);

      ToastAndroid.show(
        `${name} deletado(a) do nosso banco de dados.`,
        ToastAndroid.BOTTOM,
      );

      reloadPage((state) => !state);
    } catch (e) {
      console.log(e);
    }
  }, [cardKey, name, reloadPage]);

  return (
    <>
      <Styles.Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={openOrCloseModal}>
        <Styles.View>
          <Styles.ModalContent>
            <Styles.InfosContainer>
              <Styles.NameText>{name}</Styles.NameText>
              <Styles.Text>
                Idade:{' '}
                <Styles.Strong>
                  {customFormatDuration(new Date(birthDate))}
                </Styles.Strong>
              </Styles.Text>
              <Styles.Text>
                Data Medida:{' '}
                <Styles.Strong>
                  {formatSimpleDate(new Date(measuredDate))}
                </Styles.Strong>
              </Styles.Text>
              <Styles.Text>
                Perimetro Cefálico:{' '}
                <Styles.Strong>
                  {cephalicPerimeter}{' '}
                  {checkUnity(cephalicPerimeter) ? 'm' : 'cm'}
                </Styles.Strong>
              </Styles.Text>
              <Styles.Text>
                Peso:{' '}
                <Styles.Strong>
                  {weight} {checkUnity(weight) ? 'kg' : 'g'}
                </Styles.Strong>
              </Styles.Text>
              <Styles.Text>
                Altura:{' '}
                <Styles.Strong>
                  {height} {checkUnity(height) ? 'm' : 'cm'}
                </Styles.Strong>
              </Styles.Text>
              <Styles.Text>
                Imc: <Styles.Strong>{imc}</Styles.Strong>
              </Styles.Text>
            </Styles.InfosContainer>
            <Styles.ActionsContainer>
              <Styles.Button>
                <Styles.Image source={editImg} />
              </Styles.Button>
              <Styles.Button onPress={handleDeleteCard}>
                <Styles.Image source={deleteImg} />
              </Styles.Button>
            </Styles.ActionsContainer>
          </Styles.ModalContent>
        </Styles.View>
      </Styles.Modal>
      <Styles.Container onPress={openOrCloseModal}>
        <Styles.NameText>{name}</Styles.NameText>
        <Styles.CardInfos>
          <Styles.Text>{customFormatDuration(new Date(birthDate))}</Styles.Text>
          <Styles.Text />
          <Styles.Text>{formatSimpleDate(new Date(measuredDate))}</Styles.Text>
        </Styles.CardInfos>
      </Styles.Container>
    </>
  );
};

export default Card;
