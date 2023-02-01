import { COLORS, getRelativeHeight } from '@/constants/styles';
import { InputNameType } from '@/constants/types';
import AuthHeader from '@/components/auth/AuthHeader';
import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import ImageIcon from '@/assets/icons/Image.svg';

import * as styles from './RegisterTemplate.style';

interface RegisterStep4Props {
  nickname: string;
  profileImg: string;
  onInputChange: (name: InputNameType, value: string | number) => void;
  onBtnPress: () => void;
}

const RegisterStep4 = ({
  nickname,
  profileImg,
  onInputChange,
  onBtnPress,
}: RegisterStep4Props) => {
  return (
    <styles.StepViewWrap>
      <AuthHeader
        title="회원가입"
        description="Weeda에서 사용할 프로필을 생성해주세요."
        style={{ marginBottom: getRelativeHeight(105) }}
      />
      {/* TODO profileImg Input */}
      <styles.ProfileInput>
        <ImageIcon color={COLORS.grayscale.gray4} />
      </styles.ProfileInput>
      <TextInput
        value={nickname}
        onChangeText={(t) => onInputChange('nickname', t)}
        placeholder="사용할 닉네임을 입력해주세요."
        style={styles.InputStyle}
        textAlign="center"
      />
      <styles.ButtonWrap>
        <Button title="시작하기" onPress={onBtnPress} />
      </styles.ButtonWrap>
    </styles.StepViewWrap>
  );
};

export default RegisterStep4;
