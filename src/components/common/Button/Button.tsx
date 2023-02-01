import {
  COLORS,
  TextStyleNameType,
  TEXT_STYLE_NAMES,
} from '@/constants/styles';
import { PressableProps, StyleProp, ViewStyle } from 'react-native';
import * as styles from './Button.style';

export interface ButtonProps extends PressableProps {
  /** 버튼 텍스트 */
  title: string;
  /** 버튼 텍스트 스타일 이름 */
  textStyleName?: TextStyleNameType;
  /** 버튼 텍스트 색상 */
  color?: string;
  /** 버튼 색상 */
  backgroundColor?: string;
  /** 버튼 테두리 두께 */
  borderWidth?: number;
  /** 버튼 테두리 색상 */
  borderColor?: string;
  /** 버튼 누르면 실행되는 함수 */
  onPress: () => void;
  /** 컴포넌트 스타일링을 위한 css */
  style?: StyleProp<ViewStyle>;
}

/**
 * 스타일링하여 재사용할 수 있는 버튼 컴포넌트
 */
const Button = ({
  title,
  textStyleName = TEXT_STYLE_NAMES.body1B,
  color = COLORS.grayscale.white,
  backgroundColor = COLORS.primary.main,
  borderColor = 'transparent',
  borderWidth = 0,
  style,
  onPress,
  ...buttonProps
}: ButtonProps) => {
  return (
    <styles.Button
      backgroundColor={backgroundColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
      onPress={onPress}
      style={style}
      {...buttonProps}
    >
      <styles.Text textStyleName={textStyleName} color={color}>
        {title}
      </styles.Text>
    </styles.Button>
  );
};

export default Button;
