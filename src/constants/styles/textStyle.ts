export const TEXT_STYLE_NAMES = {
  title: 'title',
  subtitle1: 'subtitle1',
  subtitle2B: 'subtitle2B',
  subtitle2R: 'subtitle2R',
  body1B: 'body1B',
  body1R: 'body1R',
  body2B: 'body2B',
  body2R: 'body2R',
  body3: 'body3',
} as const;

export type TextStyleNameType = keyof typeof TEXT_STYLE_NAMES;

export interface TextStyleType {
  fontFamily: 'Bold' | 'SemiBold' | 'Regular' | 'Light';
  fontWeight: '700' | '600' | '400' | '300';
  fontSize: number;
  lineHeight: number;
}

const LINE_HEIGHT = 1.4;

export const TEXT_STYLES: Record<TextStyleNameType, TextStyleType> = {
  title: {
    fontFamily: 'Bold',
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 28 * LINE_HEIGHT,
  },
  subtitle1: {
    fontFamily: 'Bold',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 24 * LINE_HEIGHT,
  },
  subtitle2B: {
    fontFamily: 'Bold',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 20 * LINE_HEIGHT,
  },
  subtitle2R: {
    fontFamily: 'Regular',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 20 * LINE_HEIGHT,
  },
  body1B: {
    fontFamily: 'SemiBold',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 18 * LINE_HEIGHT,
  },
  body1R: {
    fontFamily: 'Regular',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 18 * LINE_HEIGHT,
  },
  body2B: {
    fontFamily: 'SemiBold',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16 * LINE_HEIGHT,
  },
  body2R: {
    fontFamily: 'Regular',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16 * LINE_HEIGHT,
  },
  body3: {
    fontFamily: 'Light',
    fontWeight: '300',
    fontSize: 14,
    lineHeight: 14 * LINE_HEIGHT,
  },
} as const;
