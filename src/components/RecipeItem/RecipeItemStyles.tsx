import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {ImageStyle as FastImageStyle} from 'react-native-fast-image';
import {fonts, fontSize} from '../../shared/theme/fonts';

type RecipeItemStylesType = {
  container: ViewStyle;
  recipeImage: FastImageStyle;
  rateContainer: ViewStyle;
  rateImage: ImageStyle;
  rateText: TextStyle;
  favouriteContainer: ViewStyle;
  favouriteImage: ImageStyle;
  bottomContainer: ViewStyle;
  titleText: TextStyle;
  descriptionContainer: ViewStyle;
  descriptionText: TextStyle;
};

export const RecipeItemStyles = (colors: any) =>
  StyleSheet.create<RecipeItemStylesType>({
    container: {
      marginRight: 16,
    },
    recipeImage: {
      width: 280,
      height: 180,
    },
    rateContainer: {
      position: 'absolute',
      top: 8,
      left: 8,
      width: 58,
      height: 28,
      borderRadius: 8,
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: colors.grey4D,
    },
    rateImage: {
      marginLeft: 8,
      tintColor: colors.white,
    },
    rateText: {
      marginLeft: 2,
      color: colors.white,
      ...fonts.PopinsFonts.regular,
      ...fontSize.fontSize14,
    },
    favouriteContainer: {
      position: 'absolute',
      right: 8,
      top: 8,
      width: 32,
      height: 32,
      borderRadius: 16,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      backgroundColor: colors.white,
    },
    favouriteImage: {
      width: 21,
      height: 21,
    },
    bottomContainer: {
      flexDirection: 'row',
      marginTop: 6,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titleText: {
      marginLeft: 0,
      color: colors.grey,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize14,
    },
    descriptionContainer: {
      flexDirection: 'row',
      marginTop: 6,
      alignItems: 'center',
    },
    descriptionText: {
      marginLeft: 8,
      color: colors.lightGrey,
      ...fonts.PopinsFonts.regular,
      ...fontSize.fontSize12,
    },
  });
