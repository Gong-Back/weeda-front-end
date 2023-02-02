import { useState } from 'react';
import { InputNameType, RegisterInputsType } from '@/constants/types';
import RegisterTemplate from '@/components/auth/RegisterTemplate';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/**
 * 회원가입 화면
 */
const RegisterScreen = () => {
  const [inputs, setInputs] = useState<RegisterInputsType>({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
    gender: 'm',
    age: 0,
    profileImg: '',
    nickname: '',
  });

  const onInputChange = (name: InputNameType, value: string | number) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <SafeAreaProvider>
      <RegisterTemplate inputs={inputs} onInputChange={onInputChange} />
    </SafeAreaProvider>
  );
};

export default RegisterScreen;
