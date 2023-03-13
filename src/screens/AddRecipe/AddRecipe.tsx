import {useNavigation, useTheme} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {CLOCK, MINUS, SERVES} from '../../assets/ImageConsts/ImageConsts';
import Button from '../../components/Button/Button';
import {AddRecipeStyles} from './AddRecipeStyles';

type AddRecipeProps = {};

type RecipeDetailResponse = {
  strMealThumb: string;
  strMeal: string;
};

type IngrediantProps = {
  name: string;
  qty: string;
  key: string;
};

const AddRecipe: FC<AddRecipeProps> = () => {
  const {colors} = useTheme();
  const styles = AddRecipeStyles(colors);
  const [recipeDetail, setRecipeDetail] = useState<RecipeDetailResponse>();
  const [ingrediants, setIngrediants] = useState<IngrediantProps[]>([]);
  const navigation = useNavigation();

  const getCategoryData = async () => {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',
      );
      const json = await response.json();
      console.log(json);
      setRecipeDetail(json.meals[0]);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  function renderIngrediantList() {
    return ingrediants.map(data => {
      return (
        <View key={data.key} style={styles.ingrediantListViewStyle}>
          <TextInput
            style={styles.ingrediantNameTextInput}
            placeholder="Item name"
          />
          <TextInput
            style={styles.ingrediantQtyTextInput}
            placeholder="Quantity"
          />
          <TouchableOpacity
            style={styles.ingrediantRemoveButton}
            onPress={() => {}}>
            <Image style={styles.commonImageViewStyle} source={MINUS} />
          </TouchableOpacity>
        </View>
      );
    });
  }

  const renderServeCookingView = (
    label: string,
    image: ImageSourcePropType,
  ) => {
    return (
      <View style={styles.serveCookingViewContainer}>
        <View style={styles.serveCookingViewSubContainer}>
          <Image style={styles.commonImageViewStyle} source={image} />
          <Text style={styles.serveCookingLabel}>{label}</Text>
        </View>
        <TextInput style={styles.serveCookingTextInput} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        {recipeDetail && recipeDetail.strMeal && (
          <Text style={styles.createRecipeText}>Create Recipe</Text>
        )}
        {recipeDetail && recipeDetail.strMealThumb && (
          <FastImage
            style={styles.recipeImage}
            source={{
              uri: recipeDetail.strMealThumb,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        )}
        <TextInput style={styles.recipeTextInput} placeholder="Recipe Name" />
        {renderServeCookingView('Serve', SERVES)}
        {renderServeCookingView('Cook time (mins)', CLOCK)}
        <View style={styles.ingrediantConatiner}>
          <Text style={styles.ingrediantLabelText}>Ingredients</Text>
          {renderIngrediantList()}
          <TouchableOpacity
            style={styles.addNewIngrediantView}
            onPress={() => {
              const ingrediantsTemp = [...ingrediants];
              ingrediantsTemp.push({
                name: '',
                qty: '',
                key: (ingrediantsTemp.length + 1).toString(),
              });
              console.log('ingrediantsTemp', ingrediantsTemp);
              setIngrediants(ingrediantsTemp);
            }}>
            <Text style={styles.addNewIngrediantText}>
              + Add new Ingredient
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Button
        style={styles.saveRecipeButtonStyle}
        title="Save My Recipe"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
};

export default AddRecipe;
