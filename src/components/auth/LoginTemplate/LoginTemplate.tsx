import { COLORS } from '@/constants/styles';
import { InputNameType, LoginInputsType } from '@/constants/types';
import LeftIcon from '@/assets/icons/Left.svg';
import Button from '@/components/common/Button';
import AuthHeader from '@/components/auth/AuthHeader';
import AuthForm from '@/components/auth/AuthForm';
import * as styles from './LoginTemplate.style';

export interface LoginTemplateProps {
  /** 로그인 입력 값 (아이디, 패스워드) */
  inputs: LoginInputsType;
  /** 로그인 입력 값을 관리하는 함수 */
  onInputChange: (name: InputNameType, value: string) => void;
}

const LoginTemplate = ({ inputs, onInputChange }: LoginTemplateProps) => {
  return (
    <styles.Template>
      <LeftIcon fill={COLORS.grayscale.gray5} style={styles.IconStyle} />
      <styles.HeaderWrap>
        <AuthHeader
          title="로그인"
          description="이메일과 비밀번호를 입력해주세요."
        />
      </styles.HeaderWrap>
      <styles.FormWrap>
        <AuthForm
          screen="login"
          inputs={inputs}
          onInputChange={onInputChange}
        />
      </styles.FormWrap>
      <styles.ButtonWrap>
        <Button title="시작하기" onPress={() => {}} />
      </styles.ButtonWrap>
    </styles.Template>
  );
};

export default LoginTemplate;
