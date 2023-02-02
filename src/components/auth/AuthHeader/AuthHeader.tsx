import Text from '@/components/common/Text';
import { COLORS, TEXT_STYLE_NAMES } from '@/constants/styles';
import { StyleProp, ViewStyle } from 'react-native';
import * as styles from './AuthHeader.style';

export interface AuthHeaderProps {
  /** 해당 페이지의 타이틀 */
  title: string;
  /** 해당 페이지에 대한 설명으로 들어갈 텍스트 */
  description: string;
  /** 컴포넌트 스타일링을 위한 css */
  style?: StyleProp<ViewStyle>;
}

/**
 * 로그인 및 회원가입 페이지의 헤더 컴포넌트
 */
const AuthHeader = ({ title, description, style }: AuthHeaderProps) => (
  <styles.HeaderWrap style={style}>
    <Text
      textStyleName={TEXT_STYLE_NAMES.title}
      color={COLORS.grayscale.gray7}
      style={styles.TitleStyle}
    >
      {title}
    </Text>
    <Text
      textStyleName={TEXT_STYLE_NAMES.body1R}
      color={COLORS.grayscale.gray5}
    >
      {description}
    </Text>
  </styles.HeaderWrap>
);

export default AuthHeader;
