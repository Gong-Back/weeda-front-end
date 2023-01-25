import { TextStyleNameType, TEXT_STYLES } from '@/constants/styles';
import styled from '@emotion/native';

export interface TextProps {
  /** 텍스트 스타일 이름 */
  textStyleName: TextStyleNameType;
  /** 텍스트 색상 */
  color: string;
}

/**
 * 텍스트 컴포넌트
 */
const Text = styled.Text((props: TextProps) => ({
  fontFamily: TEXT_STYLES[props.textStyleName].fontFamily,
  fontWeight: TEXT_STYLES[props.textStyleName].fontWeight,
  fontSize: TEXT_STYLES[props.textStyleName].fontSize,
  lineHeight: TEXT_STYLES[props.textStyleName].lineHeight,
  color: props.color,
}));

export default Text;
