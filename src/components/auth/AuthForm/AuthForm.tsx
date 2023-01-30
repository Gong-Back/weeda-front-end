import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import { COLORS } from '@/constants/styles';
import { InputNameType, RegisterInputsType } from '@/constants/types';
import * as styles from './AuthForm.style';

const PLACEHOLDERS = {
  id: '아이디를 입력해주세요',
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
}

/**
 *  로그인과 회원가입 화면에서 사용되는 폼 컴포넌트
 */
const AuthForm = ({ screen, inputs, onInputChange }: AuthFormProps) => {
  const isRegisterScreen = screen === 'register';
  return (
    <styles.FormWrap>
      <styles.InputWrap>
        <Text textStyleName="subtitle2B" color={COLORS.grayscale.gray6}>
          아이디
        </Text>
        <TextInput
          value={inputs.id ?? ''}
          onChangeText={(t) => onInputChange('id', t)}
          placeholder={PLACEHOLDERS.id}
          style={styles.InputStyle}
        />
      </styles.InputWrap>
      <styles.InputWrap>
        <Text textStyleName="subtitle2B" color={COLORS.grayscale.gray6}>
          비밀번호
        </Text>
        <TextInput
          value={inputs.pw ?? ''}
          onChangeText={(t) => onInputChange('pw', t)}
          placeholder={
            isRegisterScreen ? PLACEHOLDERS.createPW : PLACEHOLDERS.inputPW
          }
          style={styles.InputStyle}
          secureTextEntry={true}
        />
        {isRegisterScreen && (
          <TextInput
            value={inputs.pwCheck ?? ''}
            onChangeText={(t) => onInputChange('pwCheck', t)}
            placeholder={PLACEHOLDERS.checkPW}
            style={styles.InputStyle}
            secureTextEntry={true}
          />
        )}
      </styles.InputWrap>
    </styles.FormWrap>
  );
};

export default AuthForm;
