import styled from '@emotion/native';

export const ButtonContainer = styled.Pressable({
  alignItems: 'center',
  justifyContent: 'center',
  width: 300,
  paddingVertical: 12,
  borderRadius: 4,
  backgroundColor: 'black',
});

export const ButtonLabel = styled.Text({
  fontSize: 16,
  lineHeight: 21,
  fontWeight: 'bold',
  letterSpacing: 0.25,
  color: 'white',
});
