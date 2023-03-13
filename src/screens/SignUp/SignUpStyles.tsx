import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import { fonts, fontSize } from '../../shared/theme/fonts';

type SignUpStylesType = {
  container: ViewStyle;
  safeAreaContainer: ViewStyle;
  recipeTextInput: TextStyle;
  signUpButton: ViewStyle;
  signUpContainer: TextStyle;
  placeholderText: TextStyle;
};

export const SignUpStyles = (colors: any) =>
  StyleSheet.create<SignUpStylesType>({
    container: {
      flex: 1,
    },
    safeAreaContainer: {
      marginHorizontal: 20,
    },
    placeholderText: {
      marginTop: 16,
      color: colors.lightGrey,
      ...fonts.PopinsFonts.regular,
      ...fontSize.fontSize12,
    },
    recipeTextInput: {
      height: 44,
      marginTop: 8,
      borderWidth: 1,
      padding: 10,
      borderColor: colors.secondary,
      borderRadius: 10,
    },
    signUpButton: {
      marginTop: 40,
      width: 200,
      alignSelf: 'center',
    },
    signUpContainer: {
      marginBottom: 20,
      alignSelf: 'center',
      color: colors.grey,
      ...fonts.PopinsFonts.bold,
      ...fontSize.fontSize24,
    },
  });
