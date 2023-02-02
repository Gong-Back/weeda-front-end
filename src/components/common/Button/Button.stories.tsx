import React from 'react';
import { View } from 'react-native';
import { css } from '@emotion/native';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import { COLORS, TEXT_STYLE_NAMES } from '@/constants/styles';
import Button from './Button';

const borderButtonStyle = css({
  borderWidth: 1,
  borderColor: COLORS.primary.main,
  backgroundColor: 'transparent',
});

storiesOf('Button', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('with background', () => (
    <Button
      title="Button"
      textStyleName={TEXT_STYLE_NAMES.body1B}
      color={COLORS.grayscale.white}
      backgroundColor={COLORS.primary.main}
      onPress={action('clicked a background button')}
    />
  ))
  .add('with border', () => (
    <Button
      title="Button"
      textStyleName={TEXT_STYLE_NAMES.body1B}
      color={COLORS.primary.main}
      backgroundColor={COLORS.grayscale.white}
      onPress={action('clicked a background button')}
      style={borderButtonStyle}
    />
  ));
