import { COLORS, getRelativeHeight } from '@/constants/styles';
import styled, { css } from '@emotion/native';

export const Template = styled.View({
  flex: 1,
  paddingHorizontal: 40,
  backgroundColor: COLORS.grayscale.white,
  alignItems: 'center',
});

export const HeaderWrap = styled.View({
  width: '100%',
  marginTop: getRelativeHeight(75),
});

export const FormWrap = styled.View({
  width: '100%',
  marginTop: getRelativeHeight(111),
});

export const ButtonWrap = styled.View({
  position: 'absolute',
  bottom: getRelativeHeight(38),
});

export const IconStyle = css({
  position: 'absolute',
  top: 10,
  left: 16,
});
