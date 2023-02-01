import { getRelativeHeight } from '@/constants/styles';
import styled, { css } from '@emotion/native';

export const HeaderWrap = styled.View({
  width: '100%',
  marginTop: getRelativeHeight(75),
});

export const TitleStyle = css({
  marginBottom: getRelativeHeight(13),
});
