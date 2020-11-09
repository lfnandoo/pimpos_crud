import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: #eff2f7;
`;

export const Button = styled.TouchableOpacity`
  height: 45px;
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 10px auto;

  border-radius: 5px;

  background-color: rgba(232, 37, 131, 1);
`;

export const ButtonText = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 18px;
  color: #fff;
`;

export const MainContent = styled.ScrollView`
  flex: 1;
  margin: 5px auto;
  width: 100%;
`;

export const EmptyChild = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 22px;
  text-align: center;
`;
