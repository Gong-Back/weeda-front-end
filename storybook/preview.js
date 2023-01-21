import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  CenterView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});

export const decorators = [
  (Story) => (
    <View style={styles.CenterView}>
      <Story />
    </View>
  ),
];
