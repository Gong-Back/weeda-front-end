import { Dimensions } from 'react-native';

const FIGMA_WINDOW_WIDTH = 375;
const FIGMA_WINDOW_HEIGHT = 812;

const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

/**
 * 기기 크기에 따라 상대적인 너비 값을 계산해주는 함수
 * @param width 디자인 상의 너비 값
 * @returns 계산된 너비 값
 */
export const getRelativeWidth = (width: number) => {
  const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;
  return screenWidth * (percentage / 100);
};

/**
 * 기기 크기에 따라 상대적인 너비 값을 계산해주는 함수
 * @param height 디자인 상의 너비 값
 * @returns 계산된 너비 값
 */
export const getRelativeHeight = (height: number) => {
  const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;
  return screenHeight * (percentage / 100);
};
