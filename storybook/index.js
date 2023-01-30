// if you use expo remove this line
import { AppRegistry, View } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  getStorybookUI,
  configure,
  addDecorator,
} from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { loadStories } from './storyLoader';

import './rn-addons';
import Decorator from './Decorator';

// load fonts
addDecorator((Story) => (
  <Decorator>
    <Story />
  </Decorator>
));

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: null,
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
