import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
  width: 80%;
  margin: 5px auto;
  align-items: center;

  background-color: #fff;
`;

export const NameText = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 16px;
`;

export const CardInfos = styled.View`
  flex-direction: row;
  padding: 5px;
`;

export const Text = styled.Text`
  font-family: 'Ubuntu-Regular';
  opacity: 0.6;
  padding: 5px;
`;

export const Modal = styled.Modal``;

export const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: rgba(100, 100, 100, 0.6);
`;

export const ModalContent = styled.View`
  padding: 20px;
  border-radius: 5px;
  width: 70%;
  height: 30%;
  align-items: center;
  justify-content: center;

  background-color: #f9c112;
`;
