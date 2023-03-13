import {DefaultTheme} from '@react-navigation/native';

export const palette = {
  primary: '#33CDD7',
  secondary: '#00C1CD',
  white: '#fff',
  secondaryWhite: '#f1f1f1',
  black: '#000',
  secondaryBlack: '#130F26',
  neutralBlack: '#181818',
  grey: '#303030',
  grey4D: '#3030304D',
  secondaryGrey: '#D9D9D9',
  lightGrey: '#A9A9A9',
  orange: '#FFB661',
};

export const Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...palette,
  },
};
