import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {fonts, fontSize, fontWeight} from '../../shared/theme/fonts';

type LogInStyleType = {
  container: ViewStyle;
  imageContainer: ImageStyle;
  topViewContainer: ViewStyle;
  topImage: ImageStyle;
  topText: TextStyle;
  topLeftText: TextStyle;
  bottomContainer: ViewStyle;
  bottomViewContainer: ViewStyle;
  titleText: TextStyle;
  descriptionText: TextStyle;
  signUpButton: ViewStyle;
  startCookingButton: ViewStyle;
  startCookingButtonTitle: TextStyle;
};

export const LogInStyles = (colors: any) =>
  StyleSheet.create<LogInStyleType>({
    container: {
      flex: 1,
    },
    imageContainer: {
      height: '100%',
      width: '100%',
    },
    topViewContainer: {
      flex: 1,
      marginTop: 60,
      flexDirection: 'row',
      position: 'absolute',
      alignSelf: 'center',
      alignItems: 'center',
    },
    topImage: {
      height: 12,
      width: 12,
    },
    topText: {
      marginLeft: 10,
      color: colors.primary,
      ...fonts.PopinsFonts.regular,
      ...fontSize.fontSize16,
    },
    topLeftText: {
      marginLeft: 0,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize16,
    },
    bottomContainer: {
      flex: 1,
      bottom: 0,
      width: '100%',
      position: 'absolute',
      alignSelf: 'center',
      alignItems: 'center',
    },
    bottomViewContainer: {
      flex: 1,
      marginTop: 140,
      marginBottom: 82,
      alignSelf: 'center',
      alignItems: 'center',
    },
    titleText: {
      marginLeft: 0,
      color: colors.white,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize56,
    },
    descriptionText: {
      marginTop: 4,
      color: colors.white,
      ...fonts.PopinsFonts.regular,
      ...fontSize.fontSize16,
    },
    signUpButton: {
      marginTop: 40,
      width: 200,
    },
    startCookingButton: {
      marginTop: 16,
      width: 200,
      backgroundColor: colors.white,
    },
    startCookingButtonTitle: {
      color: colors.primary,
    },
  });
