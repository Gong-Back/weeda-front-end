import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { COLORS, TEXT_STYLE_NAMES } from '@/constants/styles';
import Text from './Text';

storiesOf('Text', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('Title', () => (
    <Text textStyleName={TEXT_STYLE_NAMES.title} color={COLORS.grayscale.black}>
      Title
    </Text>
  ))
  .add('SubTitle1', () => (
    <Text
      textStyleName={TEXT_STYLE_NAMES.subtitle1}
      color={COLORS.grayscale.black}
    >
      SubTitle1
    </Text>
  ))
  .add('Body1B', () => (
    <Text textStyleName={TEXT_STYLE_NAMES.body1B} color={COLORS.primary.main}>
      Body1B
    </Text>
  ))
  .add('Body1R', () => (
    <Text textStyleName={TEXT_STYLE_NAMES.body1R} color={COLORS.primary.main}>
      Body1R
    </Text>
  ));
