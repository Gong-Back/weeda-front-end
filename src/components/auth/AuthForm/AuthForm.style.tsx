import { COLORS, getRelativeHeight } from '@/constants/styles';
import styled, { css } from '@emotion/native';

export const FormWrap = styled.View({});

export const InputWrap = styled.View({
  marginBottom: 45,
});

export const InputStyle = css({
  borderColor: 'transparent',
  borderBottomColor: COLORS.grayscale.gray3,
  marginTop: 30,
  width: '100%',
});
