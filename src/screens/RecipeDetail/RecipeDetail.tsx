import {useTheme} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  LOCATION,
  MILK,
  STAR_SMALL,
  USER_ICON,
} from '../../assets/ImageConsts/ImageConsts';
import Button from '../../components/Button/Button';
import {localStrings} from '../../shared/theme/Localise/localise';
import {RecipeDetailStyles} from './RecipeDetailStyles';

type RecipeDetailProps = {};

type RecipeDetailResponse = {
  strMealThumb: string;
  strMeal: string;
};

type IngrediantProps = {
  ingrediants: string[];
};

const RecipeDetail: FC<RecipeDetailProps> = () => {
  const {colors} = useTheme();
  const styles = RecipeDetailStyles(colors);
  const [recipeDetail, setRecipeDetail] = useState<RecipeDetailResponse>();
  const [ingrediants, setIngrediants] = useState<IngrediantProps>({
    ingrediants: [],
  });

  const getRecipeDetail = async () => {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata',
      );
      const json = await response.json();
      setRecipeDetail(json.meals[0]);
      let ingrediantsArray = [];
      for (const property in json.meals[0]) {
        if (property.includes('Ingredient') && json.meals[0][property]) {
          ingrediantsArray.push(json.meals[0][property]);
        }
        setIngrediants({ingrediants: ingrediantsArray});
      }
      console.log(ingrediants);
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  useEffect(() => {
    getRecipeDetail();
  }, []);

  function renderIngrediantList() {
    return ingrediants.ingrediants.map(data => {
      return (
        <View key={data} style={styles.ingrediantListContainerView}>
          <View style={styles.ingrediantListView}>
            <Image style={styles.ingrediantImage} source={MILK} />
            <Text style={styles.ingrediantTextValue}>{data}</Text>
          </View>
          <Text style={styles.qtyTextValue}>{localStrings.sampleQty}</Text>
        </View>
      );
    });
  }

  const renderIngrediants = () => {
    return (
      <View>
        <View style={styles.ingrediantHeaderView}>
          <Text style={styles.ingrediantTextLabel}>
            {localStrings.ingredientsTitle}
          </Text>
          <Text style={styles.ingrediantCountLabel}>
            {ingrediants.ingrediants.length + ' ' + localStrings.itemsTitle}
          </Text>
        </View>
        {renderIngrediantList()}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        {recipeDetail && recipeDetail.strMeal && (
          <Text style={styles.recipeName}>{recipeDetail.strMeal}</Text>
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
        <View style={styles.rattingView}>
          <Image style={styles.rattingImage} source={STAR_SMALL} />
          <Text style={styles.rattingTextStyle}>
            {localStrings.defaultRating}
          </Text>
          <Text style={styles.reviewTextStyle}>
            {localStrings.defaultReviews}
          </Text>
        </View>
        <View style={styles.followContainewView}>
          <View style={styles.followView}>
            <Image source={USER_ICON} />
            <View style={styles.userLocationView}>
              <Text style={styles.autherName}>{localStrings.authorTitle}</Text>
              <View style={styles.locationContainer}>
                <Image style={styles.locationImage} source={LOCATION} />
                <Text style={styles.locationName}>
                  {localStrings.locationTitle}
                </Text>
              </View>
            </View>
          </View>
          <Button
            style={styles.followButton}
            title={localStrings.followTitle}
            onPress={() => {}}
          />
        </View>
        {renderIngrediants()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetail;
