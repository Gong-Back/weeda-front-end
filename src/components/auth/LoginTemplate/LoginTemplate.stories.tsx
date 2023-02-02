import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import LoginTemplate from './LoginTemplate';

storiesOf('LoginTemplate', module)
  .addDecorator((getStory) => <View style={{ flex: 1 }}>{getStory()}</View>)
  .add('default', () => (
    <LoginTemplate
      inputs={{ email: 'email', password: 'password' }}
      onInputChange={() => {}}
    />
  ));
