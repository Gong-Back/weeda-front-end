import AuthHeader from '@/components/auth/AuthHeader';
import {
  COLORS,
  TEXT_STYLE_NAMES,
  getRelativeHeight,
} from '@/constants/styles';
import { InputNameType } from '@/constants/types';
import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import * as styles from './RegisterTemplate.style';

interface RegisterStep2Props {
  name: string;
  onInputChange: (name: InputNameType, value: string | number) => void;
  onBtnPress: () => void;
}

const RegisterStep2 = ({
  name,
  onInputChange,
  onBtnPress,
}: RegisterStep2Props) => (
  <styles.StepViewWrap>
    <AuthHeader
      title="회원가입"
      description="당신의 정보가 궁금해요!"
      style={{ marginBottom: getRelativeHeight(165) }}
    />
    <styles.NameFormWrap>
      <styles.NameInputWrap>
        <TextInput
          value={name}
          onChangeText={(t) => onInputChange('name', t)}
          placeholder="이름을 입력해주세요"
          style={styles.NameInputStyle}
        />
        <Text
          color={COLORS.grayscale.gray6}
          textStyleName={TEXT_STYLE_NAMES.subtitle2R}
        >
          님
        </Text>
      </styles.NameInputWrap>
      <Text
        color={COLORS.grayscale.gray6}
        textStyleName={TEXT_STYLE_NAMES.subtitle2R}
        style={{ marginTop: 15 }}
      >
        반가워요! 👋
      </Text>
    </styles.NameFormWrap>
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

export default RegisterStep2;
