import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import StorybookUI from './storybook';

const LOAD_STORYBOOK = true;

function App() {
  const [fontLoaded] = useFonts({
    Bold: require('./assets/fonts/Pretendard-Bold.otf'),
    SemiBold: require('./assets/fonts/Pretendard-SemiBold.otf'),
    Regular: require('./assets/fonts/Pretendard-Regular.otf'),
    Light: require('./assets/fonts/Pretendard-Light.otf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LOAD_STORYBOOK ? StorybookUI : App;
