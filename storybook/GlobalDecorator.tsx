/* eslint-disable global-require */
import React from 'react';
import { useFonts } from 'expo-font';

const Decorator = ({ children }: { children: React.ReactElement }) => {
  const [fontLoaded] = useFonts({
    Bold: require('../assets/fonts/Pretendard-Bold.otf'),
    SemiBold: require('../assets/fonts/Pretendard-SemiBold.otf'),
    Regular: require('../assets/fonts/Pretendard-Regular.otf'),
    Light: require('../assets/fonts/Pretendard-Light.otf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return [children];
};

export default Decorator;
