import React from 'react';
import { View } from 'react-native';
import { css } from '@emotion/native';
import { useFonts } from 'expo-font';

const decoratorStyle = css({
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

function Decorator({ children }) {
  const [fontLoaded] = useFonts({
    Bold: require('../assets/fonts/Pretendard-Bold.otf'),
    SemiBold: require('../assets/fonts/Pretendard-SemiBold.otf'),
    Regular: require('../assets/fonts/Pretendard-Regular.otf'),
    Light: require('../assets/fonts/Pretendard-Light.otf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return <View style={decoratorStyle}>{children}</View>;
}

export default Decorator;
