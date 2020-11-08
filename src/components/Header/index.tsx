import React from 'react';
import { StatusBar } from 'react-native';

import { logoImg } from '../../assets';

import * as Styles from './styles';

const Header: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Styles.Header
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 1,
          shadowRadius: 16.0,
          elevation: 60,
        }}>
        <Styles.Image source={logoImg} />
      </Styles.Header>
    </>
  );
};

export default Header;
