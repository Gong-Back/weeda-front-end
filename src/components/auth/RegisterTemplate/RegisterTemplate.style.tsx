import {
  COLORS,
  getRelativeHeight,
  getRelativeWidth,
} from '@/constants/styles';
import { screenWidth } from '@/constants/styles/responsiveStyle';
import styled, { css } from '@emotion/native';

/**
 * RegisterTemplate and Common Styles
 */

export const Template = styled.View({
  flex: 1,
  width: screenWidth,
  paddingHorizontal: 40,
  backgroundColor: COLORS.grayscale.white,
});

export const ProgressBarWrap = styled.View({
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  top: 22,
  width: screenWidth,
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

export const BackBtnWrap = styled.Pressable({
  position: 'absolute',
  top: 10,
  left: 16,
});

export const StepViewWrap = styled.View({
  width: '100%',
  flex: 1,

  alignItems: 'center',
});

export const InputStyle = css({
  width: '100%',
  borderColor: 'transparent',
  borderBottomColor: COLORS.grayscale.gray3,
});

/**
 * RegisterStep2 Styles
 */

export const NameInputWrap = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
});

export const NameFormWrap = styled.View({
  width: '100%',
  alignItems: 'flex-end',
});

export const NameInputStyle = css({
  ...InputStyle,
  width: getRelativeWidth(260),
});

/**
 * RegisterStep3 Styles
 */

export const InfoInputWrap = styled.View({
  width: '100%',
  marginBottom: getRelativeHeight(60),
});

export const GenderBtnsWrap = styled.View({
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const gBtnStyle = css({
  width: getRelativeWidth(142),
  height: getRelativeHeight(40),
  borderWidth: 1,
});

/**
 * RegisterStep4 Styles
 */

export const ProfileInput = styled.View({
  width: getRelativeWidth(140),
  height: getRelativeHeight(140),
  borderRadius: getRelativeWidth(70),
  backgroundColor: COLORS.grayscale.gray1,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: getRelativeHeight(42),
});
