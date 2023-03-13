import {useTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  BOOKMARK,
  STAR_SMALL,
  UNION,
  USER_ICON,
} from '../../assets/ImageConsts/ImageConsts';
import {Category} from '../../screens/RecipeHome/RecipeHome';
import {RecipeItemStyles} from './RecipeItemStyles';

type RecipeItemProps = {
  item: Category;
  onPress?: () => void;
};

const RecipeItem: FC<RecipeItemProps> = ({item, onPress}) => {
  const {colors} = useTheme();
  const styles = RecipeItemStyles(colors);
  const {
    container,
    recipeImage,
    rateContainer,
    rateImage,
    rateText,
    favouriteContainer,
    favouriteImage,
    bottomContainer,
    titleText,
    descriptionContainer,
    descriptionText,
  } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <FastImage
        style={recipeImage}
        source={{
          uri: item.strCategoryThumb,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <View style={rateContainer}>
        <Image style={rateImage} source={STAR_SMALL} />
        <Text style={rateText}>4.5</Text>
      </View>

      <TouchableOpacity style={favouriteContainer}>
        <Image
          style={favouriteImage}
          source={BOOKMARK}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
      <View style={bottomContainer}>
        <Text style={titleText}>How to make sushi at home</Text>
        <Image source={UNION} />
      </View>
      <View style={descriptionContainer}>
        <Image source={USER_ICON} />
        <Text style={descriptionText}>By Niki Samantha</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeItem;
