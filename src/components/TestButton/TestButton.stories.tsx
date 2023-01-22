import React from 'react';
import { View } from 'react-native';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';
import Button from './TestButton';

storiesOf('Components/Button', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('default', () => (
    <Button label="button" onPress={action('clicked default button')} />
  ));
