import { TextStyleNameType, TEXT_STYLES } from '@/constants/styles';
import styled from '@emotion/native';

export interface TextProps {
  textStyleName: TextStyleNameType;
  color: string;
}

const Text = styled.Text((props: TextProps) => ({
  fontFamily: TEXT_STYLES[props.textStyleName].fontFamily,
  fontWeight: TEXT_STYLES[props.textStyleName].fontWeight,
  fontSize: TEXT_STYLES[props.textStyleName].fontSize,
  lineHeight: TEXT_STYLES[props.textStyleName].lineHeight,
  color: props.color,
}));

export default Text;
