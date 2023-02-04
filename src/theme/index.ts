const colors = {
  white: '#FFFFFF',
  black: '#000000',
  green: {
    base: '#00C9A7',
    dark: '#00987f',
  },
  gray: {
    light: '#D8DADC',
    base: '#8F8F8F',
    medium: '#4D4D4D',
  },
};

const spacing = {
  xs: 2,
  sm: 4,
  sml: 6,
  md: 8,
  mdl: 12,
  base: 16,
  lg: 24,
  xl: 32,
  xxl: 46,
  xl2: 64,
};

const sizes = {
  mobile: '500px',
  tablet: '768px',
  desktop: '2560px'
};

const queries = {
  mobile: `(max-width: ${sizes.mobile})`,
  tablet: `(max-width: ${sizes.tablet})`,
  desktop: `(max-width: ${sizes.desktop})`,
}

const theme = {
  colors,
  spacing,
  sizes,
  queries,
};

export default theme;
