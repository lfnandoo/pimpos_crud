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

export const Label = styled.Text`
  font-family: 'Ubuntu-Regular';
`;

export const TextInput = styled.TextInput`
  font-family: 'Ubuntu-Regular';
  width: 52%;
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

export const View = styled.View`
  width: 70%;
  margin: 0 auto;
  flex-direction: row;
`;

export const InputBlock = styled.View`
  max-width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const DecimalInput = styled.TextInput`
  font-family: 'Ubuntu-Regular';
  width: 48%;
  margin: 6px 0;
  height: 45px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 15px;

  background-color: #fff;
`;

export const IconBlock = styled.View`
  width: 18%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  background-color: #fff;
`;

export const Image = styled.Image`
  width: 20px;
  height: 20px;
  opacity: 0.5;
`;

export const ImcPreview = styled.Text`
  font-family: 'Ubuntu-Regular';
  color: rgba(0, 0, 0, 0.6);
  text-align: center;
`;
