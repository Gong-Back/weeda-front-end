import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { css } from '@emotion/native';
import { COLORS } from '@/constants/styles';
import TextInput from './TextInput';

storiesOf('TextInput', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('default', () => (
    <TextInput value="" placeholder="write anything" onChangeText={(t) => {}} />
  ))
  .add('custom', () => (
    <TextInput
      value=""
      placeholder="write anything"
      textAlign="center"
      onChangeText={(t) => {}}
      style={customInputStyle}
    />
  ));

const customInputStyle = css({
  borderColor: 'transparent',
  borderBottomColor: COLORS.grayscale.gray3,
});
