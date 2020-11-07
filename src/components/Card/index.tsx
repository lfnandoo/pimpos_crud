import React from 'react';
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
              {customFormatDuration(new Date(birthDate))}
            </Styles.Text>
            <Styles.Text>
              {formatSimpleDate(new Date(measuredDate))}
            </Styles.Text>
            <Styles.Text>{cephalicPerimeter}</Styles.Text>
            <Styles.Text>{weight} KILO</Styles.Text>
            <Styles.Text>{height} metro</Styles.Text>
            <Styles.Text>imc</Styles.Text>
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
