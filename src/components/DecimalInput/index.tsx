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
  function onChangeAcceptOnlyNumbers(text: string) {
    let inputValue = text.replace(/\D/g, '');
    setValue(inputValue);
  }

  return (
    <>
      <Styles.Input
        placeholder={placeholder}
        keyboardType="decimal-pad"
        {...rest}
        value={value}
        onChangeText={onChangeAcceptOnlyNumbers}
      />
    </>
  );
};

export default DecimalInput;
