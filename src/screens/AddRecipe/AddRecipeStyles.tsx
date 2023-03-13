import {
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle as AcutalImageStyle,
} from 'react-native';
import {ImageStyle} from 'react-native-fast-image';

type AddRecipeStyleStyle = {
  safeAreaView: ViewStyle;
  scrollView: ViewStyle;
  createRecipeText: TextStyle;
  recipeImage: ImageStyle;
  recipeTextInput: TextStyle;
  serveCookingViewContainer: ViewStyle;
  serveCookingViewSubContainer: ViewStyle;
  serveCookingLabel: TextStyle;
  serveCookingTextInput: TextStyle;
  ingrediantConatiner: ViewStyle;
  ingrediantLabelText: TextStyle;
  addNewIngrediantView: ViewStyle;
  addNewIngrediantText: ViewStyle;
  saveRecipeButtonStyle: ViewStyle;
  ingrediantListViewStyle: ViewStyle;
  ingrediantNameTextInput: TextStyle;
  ingrediantQtyTextInput: TextStyle;
  ingrediantRemoveButton: ViewStyle;
  commonImageViewStyle: AcutalImageStyle;
};

export const AddRecipeStyles = (colors: any) =>
  StyleSheet.create<AddRecipeStyleStyle>({
    safeAreaView: {
      flex: 1,
    },
    scrollView: {
      flex: 1,
      marginHorizontal: 20,
    },
    createRecipeText: {
      marginLeft: 6,
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    recipeImage: {
      width: '100%',
      height: 220,
      borderRadius: 12,
    },
    recipeTextInput: {
      height: 44,
      marginTop: 20,
      borderWidth: 1,
      padding: 10,
      borderColor: colors.secondary,
      borderRadius: 10,
    },
    serveCookingViewContainer: {
      marginTop: 16,
      marginRight: 20,
      backgroundColor: colors.secondaryWhite,
      height: 60,
      width: '100%',
      borderRadius: 12,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    serveCookingViewSubContainer: {
      flexDirection: 'row',
      marginLeft: 16,
      alignItems: 'center',
    },
    serveCookingLabel: {
      marginLeft: 8,
      fontSize: 14,
      fontWeight: 'bold',
    },
    serveCookingTextInput: {
      height: 44,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor: colors.secondaryGrey,
      borderRadius: 10,
      width: 56,
      backgroundColor: 'white',
    },
    ingrediantConatiner: {
      marginTop: 28,
      marginBottom: 60,
    },
    ingrediantLabelText: {
      color: colors.grey,
      fontSize: 20,
      fontWeight: 'bold',
    },
    addNewIngrediantView: {
      marginTop: 17,
    },
    addNewIngrediantText: {
      color: colors.grey,
      fontSize: 16,
      fontWeight: 'bold',
    },
    saveRecipeButtonStyle: {
      width: '85%',
      height: 54,
      position: 'absolute',
      bottom: 20,
      alignSelf: 'center',
    },
    ingrediantListViewStyle: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    ingrediantNameTextInput: {
      height: 44,
      borderWidth: 1,
      padding: 10,
      borderColor: colors.secondaryGrey,
      borderRadius: 10,
      width: '40%',
      backgroundColor: 'white',
    },
    ingrediantQtyTextInput: {
      height: 44,
      borderWidth: 1,
      padding: 10,
      borderColor: colors.secondaryGrey,
      borderRadius: 10,
      width: '30%',
      backgroundColor: 'white',
    },
    ingrediantRemoveButton: {
      width: 20,
      height: 20,
    },
    commonImageViewStyle: {
      width: 20,
      height: 20,
    },
  });
