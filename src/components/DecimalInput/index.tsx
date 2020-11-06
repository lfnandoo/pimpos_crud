import React from 'react';

interface DecimalInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  maxLength: number;
}

import * as Styles from './styles';

const DecimalInput: React.FC<DecimalInputProps> = ({
  value,
  setValue,
  placeholder,
  ...rest
}) => {
  function handleOnChangeText(text: string) {
    switch (placeholder) {
      case 'Peso': {
        let maskNumber = text,
          integer = maskNumber.split(',')[0];

        maskNumber = maskNumber.replace(/\D/, '');
        maskNumber = maskNumber.replace(/^[0]+/, '');

        if (maskNumber.length <= 4 || !integer) {
          if (maskNumber.length === 1) {
            maskNumber = '0.00' + maskNumber;
          }
          if (maskNumber.length === 2) {
            maskNumber = '0.0' + maskNumber;
          }
          if (maskNumber.length === 3) {
            maskNumber = '0.' + maskNumber;
          }
          if (maskNumber.length === 4) {
            let firstNumber = maskNumber.charAt(0);
            let secondNumber = maskNumber.charAt(1);
            let thirdNumber = maskNumber.charAt(2);
            let fourthNumber = maskNumber.charAt(3);
            maskNumber = `${firstNumber}.${secondNumber}${thirdNumber}${fourthNumber}`;
          }
        } else {
          maskNumber = maskNumber.replace(/^(\d{1,})(\d{3})$/, '$1.$2');
        }
        text = maskNumber;
      }
    }
    setValue(text);
  }

  return (
    <>
      <Styles.Input
        {...rest}
        placeholder={placeholder}
        keyboardType="decimal-pad"
        value={value}
        onChangeText={handleOnChangeText}
      />
    </>
  );
};

export default DecimalInput;
