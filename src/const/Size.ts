const FONT_RATIO = {
  XXXLARGE: 3.2,
  XXLARGE: 2.4,
  XLARGE: 1.8,
  LARGE: 1.6,
  MEDIUM: 1.4,
  BASE: 1.2,
  SMALL: 1.1,
  XSMALL: 1.0,
  XXSMALL: 0.9,
  TINY: 0.8,
} as const;

const FONT_WEIGHT = {
  NORMAL: 400,
  BOLD: 700,
} as const;

const BORDER_RADIUS = {
  RECT: 4,
  OVAL: 30,
} as const;

const BREAK_POINT = {
  MOBILE: 560,
  TABLET: 960,
  PC: 1200,
} as const;

const HEADER = {
  HEIGHT: 50,
};

export default {
  FONT_RATIO,
  FONT_WEIGHT,
  BORDER_RADIUS,
  BREAK_POINT,
  HEADER,
};
