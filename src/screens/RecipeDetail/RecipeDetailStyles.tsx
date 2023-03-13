import {
  StyleSheet,
  ViewStyle,
  ImageStyle as ActualImageStyle,
  TextStyle,
} from 'react-native';
import {ImageStyle} from 'react-native-fast-image';
import { fonts, fontSize } from '../../shared/theme/fonts';

type RecipeDetailStyle = {
  safeAreaView: ViewStyle;
  scrollView: ViewStyle;
  recipeName: ViewStyle;
  recipeImage: ImageStyle;
  rattingView: ViewStyle;
  rattingImage: ActualImageStyle;
  rattingTextStyle: TextStyle;
  reviewTextStyle: TextStyle;
  followContainewView: ViewStyle;
  followView: ViewStyle;
  userLocationView: ViewStyle;
  autherName: TextStyle;
  locationContainer: ViewStyle;
  locationImage: ActualImageStyle;
  locationName: TextStyle;
  followButton: ViewStyle;
  ingrediantHeaderView: ViewStyle;
  ingrediantTextLabel: TextStyle;
  ingrediantCountLabel: TextStyle;
  ingrediantListContainerView: ViewStyle;
  ingrediantListView: ViewStyle;
  ingrediantImage: ActualImageStyle;
  ingrediantTextValue: TextStyle;
  qtyTextValue: TextStyle;
};

export const RecipeDetailStyles = (colors: any) =>
  StyleSheet.create<RecipeDetailStyle>({
    safeAreaView: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      marginHorizontal: 20,
      marginTop: 10,
    },
    recipeName: {
      marginLeft: 6,
      marginBottom: 15,
      color: colors.grey,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize24,
    },
    recipeImage: {
      width: '100%',
      height: 220,
      borderRadius: 12,
    },
    rattingView: {
      marginTop: 8,
      height: 28,
      borderRadius: 8,
      alignItems: 'center',
      flexDirection: 'row',
    },
    rattingImage: {
      tintColor: colors.orange,
      width: 16,
      height: 16,
    },
    rattingTextStyle: {
      marginLeft: 6,
      color: colors.grey,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize14,
    },
    reviewTextStyle: {
      marginLeft: 6,
      color: colors.lightGrey,
      ...fonts.PopinsFonts.regular,
      ...fontSize.fontSize14,
    },
    followContainewView: {
      flexDirection: 'row',
      marginTop: 16,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    followView: {
      flexDirection: 'row',
    },
    userLocationView: {
      marginLeft: 8,
    },
    autherName: {
      marginLeft: 0,
      color: colors.neutralBlack,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize16,
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    locationImage: {
      height: 12,
      width: 10,
    },
    locationName: {
      marginLeft: 8,
      color: colors.lightGrey,
      ...fonts.PopinsFonts.regular,
      ...fontSize.fontSize14,
    },
    followButton: {
      width: 77,
      height: 36,
    },
    ingrediantHeaderView: {
      flexDirection: 'row',
      marginTop: 26,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    ingrediantTextLabel: {
      marginLeft: 0,
      color: colors.grey,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize20,
    },
    ingrediantCountLabel: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: colors.grey,
      ...fonts.PopinsFonts.regular,
      ...fontSize.fontSize14,
    },
    ingrediantListContainerView: {
      flexDirection: 'row',
      marginTop: 16,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    ingrediantListView: {
      flexDirection: 'row',
      marginVertical: 12,
      alignItems: 'center',
    },
    ingrediantImage: {
      marginLeft: 16,
    },
    ingrediantTextValue: {
      marginLeft: 16,
      color: colors.grey,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize16,
    },
    qtyTextValue: {
      marginRight: 16,
      color: colors.grey,
      ...fonts.PopinsFonts.regular,
      ...fontSize.fontSize14,
    },
  });
