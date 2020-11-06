import React from 'react';

import * as Styles from './styles';

interface CardDataProps {
  name: string;
  birthDate: string | Date;
  measuredDate: string | Date;
  weight: string;
  height: string;
}

const Card: React.FC<CardDataProps> = ({
  name,
  birthDate,
  measuredDate,
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
            <Styles.Text>{birthDate}</Styles.Text>
            <Styles.Text>{measuredDate}</Styles.Text>
            <Styles.Text>{weight}Kg</Styles.Text>
            <Styles.Text>0,66</Styles.Text>
            <Styles.Text>16,32</Styles.Text>
          </Styles.ModalContent>
        </Styles.View>
      </Styles.Modal>
      <Styles.Container
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Styles.NameText>{name}</Styles.NameText>
        <Styles.CardInfos>
          <Styles.Text>{birthDate}</Styles.Text>
          <Styles.Text>{measuredDate}</Styles.Text>
          <Styles.Text>{height}</Styles.Text>
        </Styles.CardInfos>
      </Styles.Container>
    </>
  );
};

export default Card;
