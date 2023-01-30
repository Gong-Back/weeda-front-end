import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import AuthForm from './AuthForm';
import { action } from '@storybook/addon-actions';

storiesOf('AuthForm', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('in login', () => (
    <AuthForm
      screen="login"
      inputs={{ id: '', pw: '' }}
      onInputChange={action('input change')}
    />
  ))
  .add('in register', () => (
    <AuthForm
      screen="register"
      inputs={{ id: '', pw: '', pwCheck: '' }}
      onInputChange={action('input change')}
    />
  ));
