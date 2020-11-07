import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: #eff2f7;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  align-items: center;
  justify-content: center;
  padding: 15px;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: rgba(232, 37, 131, 1);
`;

export const ActionsContainer = styled.View`
  height: 10%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextInput = styled.TextInput`
  font-family: 'Ubuntu-Regular';
  width: 60%;
  height: 45px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 15px;

  background-color: #fff;
`;

export const MainContent = styled.ScrollView`
  flex: 1;
  margin: 10px auto;
  width: 100%;
`;

export const EmptyChild = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 22px;
  text-align: center;
`;
