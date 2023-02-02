import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { RegisterInputData } from '@/constants/dummyData';
import RegisterTemplate from './RegisterTemplate';

import NavigationDecorator from '../../../../storybook/NavigationDecorator';

storiesOf('RegisterTemplate', module)
  .addDecorator((getStory) => <View style={{ flex: 1 }}>{getStory()}</View>)
  .addDecorator(NavigationDecorator)
  .add('default', () => (
    <RegisterTemplate inputs={RegisterInputData} onInputChange={() => {}} />
  ));
