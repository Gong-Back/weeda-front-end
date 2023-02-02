import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import { COLORS } from '@/constants/styles';
import { InputNameType, RegisterInputsType } from '@/constants/types';
import { StyleProp, ViewStyle } from 'react-native';
import * as styles from './AuthForm.style';

const PLACEHOLDERS = {
  email: '이메일을 입력해주세요',
  inputPW: '비밀번호를 입력해주세요',
  createPW: '영문, 숫자 조합 8자리 이상',
  checkPW: '비밀번호 재입력',
};

export interface AuthFormProps {
  /** 어느 화면에서 사용되는 폼인지 */
  screen: 'login' | 'register';
  /** 폼 입력 값 */
  inputs: Partial<RegisterInputsType>;
  /** 입력 값들을 관리하는 함수 */
  onInputChange: (name: InputNameType, value: string) => void;
  /** 컴포넌트 스타일링을 위한 css */
  style?: StyleProp<ViewStyle>;
}

/**
 *  로그인과 회원가입 화면에서 사용되는 폼 컴포넌트
 */
const AuthForm = ({ screen, inputs, onInputChange, style }: AuthFormProps) => {
  const isRegisterScreen = screen === 'register';
  return (
    <styles.FormWrap style={style}>
      <styles.InputWrap>
        <Text textStyleName="subtitle2B" color={COLORS.grayscale.gray6}>
          아이디
        </Text>
        <TextInput
          value={inputs.email ?? ''}
          onChangeText={(t) => onInputChange('email', t)}
          placeholder={PLACEHOLDERS.email}
          style={styles.InputStyle}
        />
      </styles.InputWrap>
      <styles.InputWrap>
        <Text textStyleName="subtitle2B" color={COLORS.grayscale.gray6}>
          비밀번호
        </Text>
        <TextInput
          value={inputs.password ?? ''}
          onChangeText={(t) => onInputChange('password', t)}
          placeholder={
            isRegisterScreen ? PLACEHOLDERS.createPW : PLACEHOLDERS.inputPW
          }
          style={styles.InputStyle}
          secureTextEntry
        />
        {isRegisterScreen && (
          <TextInput
            value={inputs.passwordCheck ?? ''}
            onChangeText={(t) => onInputChange('passwordCheck', t)}
            placeholder={PLACEHOLDERS.checkPW}
            style={styles.InputStyle}
            secureTextEntry
          />
        )}
      </styles.InputWrap>
    </styles.FormWrap>
  );
};

export default AuthForm;
