import { useFonts } from 'expo-font';

function Decorator({ children }) {
  const [fontLoaded] = useFonts({
    Bold: require('../assets/fonts/Pretendard-Bold.otf'),
    SemiBold: require('../assets/fonts/Pretendard-SemiBold.otf'),
    Regular: require('../assets/fonts/Pretendard-Regular.otf'),
    Light: require('../assets/fonts/Pretendard-Light.otf'),
  });

  if (!fontLoaded) {
    return null;
  }

  return [children];
}

export default Decorator;
