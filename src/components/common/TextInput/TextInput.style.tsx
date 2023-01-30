import styled from '@emotion/native';
import {
  COLORS,
  TEXT_STYLES,
  TEXT_STYLE_NAMES,
  TextStyleNameType,
} from '@/constants/styles';

interface InputProps {
  textStyleName?: TextStyleNameType;
  color?: string;
}

export const Input = styled.TextInput(
  ({
    textStyleName = TEXT_STYLE_NAMES.body2R,
    color = COLORS.grayscale.gray7,
  }: InputProps) => ({
    paddingTop: 0,
    padding: 5,
    width: 300,
    height: 45,
    borderWidth: 1,
    borderColor: COLORS.grayscale.gray7,
    fontFamily: TEXT_STYLES[textStyleName].fontFamily,
    fontWeight: TEXT_STYLES[textStyleName].fontWeight,
    fontSize: TEXT_STYLES[textStyleName].fontSize,
    lineHeight: TEXT_STYLES[textStyleName].lineHeight,
    color,
  }),
);
