import { TextStyleNameType, TEXT_STYLES } from '@/constants/styles';
import styled from '@emotion/native';

interface ButtonProps {
  backgroundColor: string;
}

export const Button = styled.Pressable((props: ButtonProps) => ({
  alignItems: 'center',
  justifyContent: 'center',
  width: 295,
  height: 40,
  borderRadius: 20,
  backgroundColor: props.backgroundColor,
}));

interface TextProps {
  textStyleName: TextStyleNameType;
  color: string;
}

export const Text = styled.Text((props: TextProps) => ({
  color: props.color,
  fontFamily: TEXT_STYLES[props.textStyleName].fontFamily,
  fontWeight: TEXT_STYLES[props.textStyleName].fontWeight,
  fontSize: TEXT_STYLES[props.textStyleName].fontSize,
  lineHeight: TEXT_STYLES[props.textStyleName].lineHeight,
}));
