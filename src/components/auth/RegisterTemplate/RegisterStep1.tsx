import { COLORS, getRelativeHeight } from '@/constants/styles';
import { InputNameType } from '@/constants/types';
import AuthForm from '@/components/auth/AuthForm';
import AuthHeader from '@/components/auth/AuthHeader';
import Button from '@/components/common/Button';
import * as styles from './RegisterTemplate.style';

interface RegisterStep1Props {
  email: string;
  password: string;
  passwordCheck: string;
  onInputChange: (name: InputNameType, value: string | number) => void;
  onBtnPress: () => void;
}

const RegisterStep1 = ({
  email,
  password,
  passwordCheck,
  onInputChange,
  onBtnPress,
}: RegisterStep1Props) => (
  <styles.StepViewWrap>
    <AuthHeader
      title="회원가입"
      description="사용할 이메일과 비밀번호를 입력해주세요."
      style={{ marginBottom: getRelativeHeight(74) }}
    />
    <AuthForm
      screen="register"
      inputs={{ email, password, passwordCheck }}
      onInputChange={onInputChange}
    />
    <styles.ButtonWrap>
      <Button
        title="다음"
        onPress={onBtnPress}
        backgroundColor="transparent"
        color={COLORS.primary.main}
        borderColor={COLORS.primary.main}
        borderWidth={1}
      />
    </styles.ButtonWrap>
  </styles.StepViewWrap>
);

export default RegisterStep1;
