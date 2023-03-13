import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {fonts, fontSize} from '../../shared/theme/fonts';

type SectionStylesType = {
  container: ViewStyle;
  titleText: TextStyle;
  viewAll: ViewStyle;
  viewAllText: TextStyle;
  viewAllImage: ImageStyle;
};

export const SectionStyles = (colors: any) =>
  StyleSheet.create<SectionStylesType>({
    container: {
      marginBottom: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titleText: {
      marginLeft: 0,
      color: colors.black,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize20,
    },
    viewAll: {
      marginRight: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewAllText: {
      marginLeft: 0,
      color: colors.primary,
      ...fonts.PopinsFonts.regular,
      ...fontSize.fontSize14,
    },
    viewAllImage: {
      height: 20,
      width: 20,
      marginLeft: 4,
    },
  });
