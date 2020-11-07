import React from 'react';

interface DecimalInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  maxLength: number;
  type: string;
}

import * as Styles from './styles';

const DecimalInput: React.FC<DecimalInputProps> = ({
  value,
  setValue,
  placeholder,
  type,
  maxLength,
}) => {
  const acceptOnlyNumbers = React.useCallback((text: string) => {
    let inputValue = text;
    inputValue = inputValue.replace(/\D/g, '');
    return (text = inputValue);
  }, []);

  const handleOnChangeText = React.useCallback(
    (text: string) => {
      let textParsed = acceptOnlyNumbers(text);

      switch (type) {
        case 'WEIGHT':
          {
            let maskNumber = textParsed,
              integer = maskNumber.split('.')[0];

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
            textParsed = maskNumber;
          }
          break;
        case 'HEIGHT':
          {
            let maskNumber = textParsed,
              integer = maskNumber.split(',')[0];

            maskNumber = maskNumber.replace(/\D/, '');
            maskNumber = maskNumber.replace(/^[0]+/, '');

            if (maskNumber.length <= 4 || !integer) {
              if (maskNumber.length === 1) {
                maskNumber = '0,0' + maskNumber;
              }
              if (maskNumber.length === 2) {
                maskNumber = '0,' + maskNumber;
              }
              if (maskNumber.length === 3) {
                let firstNumber = maskNumber.charAt(0);
                let secondNumber = maskNumber.charAt(1);
                let thirdNumber = maskNumber.charAt(2);
                maskNumber = `${firstNumber},${secondNumber}${thirdNumber}`;
              }
              if (maskNumber.charAt(1) !== ',' && maskNumber.charAt(0)) {
                let firstNumber = maskNumber.charAt(0);
                let thirdNumber = maskNumber.charAt(2);
                let fourthNumber = maskNumber.charAt(3);
                maskNumber = `${firstNumber},${thirdNumber}${fourthNumber}`;
              }
            } else {
              maskNumber = maskNumber.replace(/^(\d{1,})(\d{4})$/, '$1,$2');
            }
            textParsed = maskNumber;
          }
          break;
        case 'CEPHALIC_PERIMETER': {
          let maskNumber = textParsed,
            integer = maskNumber.split('.')[0];

          maskNumber = maskNumber.replace(/\D/, '');
          maskNumber = maskNumber.replace(/^[0]+/, '');

          if (maskNumber.length <= 4 || !integer) {
            if (maskNumber.length === 1) {
              maskNumber = '0.0' + maskNumber;
            }
            if (maskNumber.length === 2) {
              maskNumber = '0.' + maskNumber;
            }
            if (maskNumber.length === 3) {
              let firstNumber = maskNumber.charAt(0);
              let secondNumber = maskNumber.charAt(1);
              let thirdNumber = maskNumber.charAt(2);
              maskNumber = `${firstNumber}.${secondNumber}${thirdNumber}`;
            }
            if (maskNumber.charAt(1) !== '.' && maskNumber.charAt(0)) {
              let firstNumber = maskNumber.charAt(0);
              let thirdNumber = maskNumber.charAt(2);
              let fourthNumber = maskNumber.charAt(3);
              maskNumber = `${firstNumber}.${thirdNumber}${fourthNumber}`;
            }
          } else {
            maskNumber = maskNumber.replace(/^(\d{1,})(\d{4})$/, '$1.$2');
          }
          textParsed = maskNumber;
        }
      }
      setValue(textParsed);
    },
    [acceptOnlyNumbers, setValue, type],
  );

  return (
    <>
      <Styles.Input
        maxLength={maxLength}
        placeholder={placeholder}
        keyboardType="decimal-pad"
        value={value}
        onChangeText={handleOnChangeText}
      />
    </>
  );
};

export default DecimalInput;
