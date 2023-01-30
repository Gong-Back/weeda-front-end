import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Header from './AuthHeader';

storiesOf('AuthHeader', module)
  .addDecorator((getStory) => <View>{getStory()}</View>)
  .add('in login', () => (
    <Header title="로그인" description="이메일과 비밀번호를 입력해주세요." />
  ))
  .add('in register', () => (
    <Header
      title="회원가입"
      description="사용할 이메일과 비밀번호를 입력해주세요."
    />
  ));
