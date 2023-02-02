import { COLORS, getRelativeHeight } from '@/constants/styles';
import styled, { css } from '@emotion/native';

export const FormWrap = styled.View({
  width: '100%',
});

export const InputWrap = styled.View({
  marginBottom: getRelativeHeight(45),
});

export const InputStyle = css({
  borderColor: 'transparent',
  borderBottomColor: COLORS.grayscale.gray3,
  marginTop: getRelativeHeight(30),
  width: '100%',
});
