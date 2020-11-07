import React from 'react';
import { checkUnity } from '../../utils/checkUnity';
import { customFormatDuration } from '../../utils/customFormatDuration';
import { formatSimpleDate } from '../../utils/formatSimpleDate';

import * as Styles from './styles';

interface CardDataProps {
  name: string;
  birthDate: string | Date;
  measuredDate: string | Date;
  cephalicPerimeter: string;
  weight: string;
  height: string;
}

const Card: React.FC<CardDataProps> = ({
  name,
  birthDate,
  measuredDate,
  cephalicPerimeter,
  weight,
  height,
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

  return (
    <>
      <Styles.Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <Styles.View>
          <Styles.ModalContent>
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
                {cephalicPerimeter} {checkUnity(cephalicPerimeter) ? 'm' : 'cm'}
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
          </Styles.ModalContent>
        </Styles.View>
      </Styles.Modal>
      <Styles.Container
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
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
