import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-bottom: 5px;

  background-color: #eff2f7;
`;

export const Nav = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 25px;
`;

export const Button = styled.TouchableOpacity``;

export const Text = styled.Text`
  font-family: 'Ubuntu-Bold';
  font-size: 20px;
  margin-left: 5px;

  color: rgba(0, 0, 0, 0.7);
`;

export const Form = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const TextInput = styled.TextInput`
  font-family: 'Ubuntu-Regular';
  width: 70%;
  margin: 6px auto;
  height: 45px;
  border-radius: 5px;
  padding: 15px;

  background-color: #fff;
`;

export const SubmitButton = styled.TouchableOpacity`
  padding: 16px 10px;
  border-radius: 5px;
  width: 50%;
  align-items: center;
  margin: 10px auto;

  background-color: rgba(232, 37, 131, 1);
`;

export const ButtonText = styled.Text`
  font-family: 'Ubuntu-Medium';
  font-size: 18px;

  color: #fff;
`;
