import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';
import RegisterProgressBar from './RegisterProgressBar';

storiesOf('RegisterProgressBar', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {getStory()}
    </View>
  ))
  .add('step1', () => <RegisterProgressBar step={1} />)
  .add('step2', () => <RegisterProgressBar step={2} />)
  .add('step3', () => <RegisterProgressBar step={3} />)
  .add('step4', () => <RegisterProgressBar step={4} />);
