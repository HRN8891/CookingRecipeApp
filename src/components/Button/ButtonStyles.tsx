import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {fonts, fontSize} from '../../shared/theme/fonts';

type ButtonStyleType = {
  container: ViewStyle;
  titleText: TextStyle;
};

export const ButtonStyles = (colors: any) =>
  StyleSheet.create<ButtonStyleType>({
    container: {
      // width: 83,
      // marginHorizontal: 16,
      height: 54,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    titleText: {
      marginHorizontal: 16,
      color: colors.white,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize16,
    },
  });
