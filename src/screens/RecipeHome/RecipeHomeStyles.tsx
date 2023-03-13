import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {ImageStyle as FastImageStyle} from 'react-native-fast-image';
import {fonts, fontSize} from '../../shared/theme/fonts';

type RecipehomeStylesType = {
  container: ViewStyle;
  safeAreaContainer: ViewStyle;
  horizontalListContainer: ViewStyle;
  usernameText: TextStyle;
  searchBarContainer: ViewStyle;
  searchImage: ImageStyle;
  searchBar: TextStyle;
  trendingContainer: ViewStyle;
  recentRecipeItemContainer: ViewStyle;
  recentItemImage: FastImageStyle;
  recentItemTitleText: TextStyle;
  recentItemDescriptionText: TextStyle;
  popularTitleText: TextStyle;
};

export const RecipeHomeStyles = (colors: any) =>
  StyleSheet.create<RecipehomeStylesType>({
    container: {
      flex: 1,
    },
    safeAreaContainer: {
      marginLeft: 20,
    },
    horizontalListContainer: {
      marginTop: 20,
    },
    usernameText: {
      marginTop: 8,
      color: colors.grey,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize24,
    },
    searchBarContainer: {
      height: 44,
      marginTop: 28,
      marginRight: 20,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: colors.secondaryGrey,
      borderRadius: 10,
    },
    searchImage: {
      marginLeft: 16,
      height: 20,
      width: 20,
    },
    searchBar: {
      flex: 1,
      marginLeft: 12,
      marginRight: 20,
    },
    trendingContainer: {
      marginTop: 20,
    },
    recentRecipeItemContainer: {
      marginRight: 16,
      width: 124,
    },
    recentItemImage: {
      width: 124,
      height: 124,
    },
    recentItemTitleText: {
      marginTop: 8,
      color: colors.grey,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize14,
    },
    recentItemDescriptionText: {
      marginTop: 4,
      color: colors.lightGrey,
      ...fonts.PopinsFonts.regular,
      ...fontSize.fontSize10,
    },
    popularTitleText: {
      marginTop: 4,
      alignSelf: 'center',
      textAlign: 'center',
      color: colors.grey,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize12,
    },
  });
