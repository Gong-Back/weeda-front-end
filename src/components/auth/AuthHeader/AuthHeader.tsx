import Text from '@/components/common/Text';
import { COLORS, TEXT_STYLE_NAMES } from '@/constants/styles';
import * as styles from './AuthHeader.style';

export interface AuthHeaderProps {
  /** 해당 페이지의 타이틀 */
  title: string;
  /** 해당 페이지에 대한 설명으로 들어갈 텍스트 */
  description: string;
}

/**
 * 로그인 및 회원가입 페이지의 헤더 컴포넌트
 */
const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <styles.HeaderWrap>
      <Text
        textStyleName={TEXT_STYLE_NAMES.title}
        color={COLORS.grayscale.gray7}
        style={styles.TitleStyle}
      >
        {title}
      </Text>
      <Text
        textStyleName={TEXT_STYLE_NAMES.subtitle2R}
        color={COLORS.grayscale.gray5}
      >
        {description}
      </Text>
    </styles.HeaderWrap>
  );
};

export default AuthHeader;
