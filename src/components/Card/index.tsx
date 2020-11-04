import React from 'react';

import * as Styles from './styles';

const Card: React.FC = () => {
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
            <Styles.NameText>Luiz Miguel Ramos</Styles.NameText>
            <Styles.Text>1 ano, 2 meses e 15 dias</Styles.Text>
            <Styles.Text>15/07/2020</Styles.Text>
          </Styles.ModalContent>
        </Styles.View>
      </Styles.Modal>
      <Styles.Container
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Styles.NameText>Luiz Miguel Ramos</Styles.NameText>
        <Styles.CardInfos>
          <Styles.Text>1 ano, 2 meses e 15 dias</Styles.Text>
          <Styles.Text>15/07/2020</Styles.Text>
        </Styles.CardInfos>
      </Styles.Container>
    </>
  );
};

export default Card;
