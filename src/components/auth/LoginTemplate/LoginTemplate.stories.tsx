import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import LoginTemplate from './LoginTemplate';

storiesOf('LoginTemplate', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, width: '100%' }}>{getStory()}</View>
  ))
  .add('default', () => (
    <LoginTemplate
      inputs={{ id: 'id', pw: 'password' }}
      onInputChange={() => {}}
    />
  ));
