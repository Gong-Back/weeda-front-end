import { TextStyleNameType } from '@/constants/styles';
import { ReactNativeStyle } from '@emotion/native';
import { TextInputProps as RNTextInputProps } from 'react-native';
import * as styles from './TextInput.style';

export interface TextInputProps extends RNTextInputProps {
  /** 입력한 텍스트  */
  value: string;
  /** 입력한 텍스트 색상 */
  color?: string;
  /** 텍스트 스타일 이름 */
  textStyleName?: TextStyleNameType;
  /** 컴포넌트 스타일링을 위한 css */
  style?: ReactNativeStyle;
  /** 텍스트 값이 변경될 때마다 발생하는 함수 */
  onChangeText: (text: string) => void;
}

const TextInput = ({
  value,
  color,
  textStyleName,
  style,
  onChangeText,
  ...textInputProps
}: TextInputProps) => {
  return (
    <styles.Input
      value={value}
      color={color}
      textStyleName={textStyleName}
      style={style}
      onChangeText={onChangeText}
      {...textInputProps}
    />
  );
};

export default TextInput;
