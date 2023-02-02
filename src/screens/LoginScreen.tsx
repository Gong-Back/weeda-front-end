import { useState } from 'react';
import LoginTemplate from '@/components/auth/LoginTemplate';
import { InputNameType, LoginInputsType } from '@/constants/types';
import { View } from 'react-native';

/**
 * 로그인 화면
 */
const LoginScreen = () => {
  const [inputs, setInputs] = useState<LoginInputsType>({
    email: '',
    password: '',
  });

  const onInputChange = (name: InputNameType, value: string) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <LoginTemplate inputs={inputs} onInputChange={onInputChange} />
    </View>
  );
};

export default LoginScreen;
