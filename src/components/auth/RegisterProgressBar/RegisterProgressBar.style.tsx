import styled from '@emotion/native';

export const BarWrap = styled.View({
  flexDirection: 'row',
});

export const Indicator = styled.View(({ color }: { color: string }) => ({
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: color,
  marginHorizontal: 5,
}));
