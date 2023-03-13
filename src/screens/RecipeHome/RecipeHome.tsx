import React, {FC} from 'react';
import {FlatList, ScrollView, Text, View, TextInput, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SearchBar} from 'react-native-screens';
import {useNavigation, useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Section from '../../components/Section/Section';
import RecipeItem from '../../components/RecipeItem/RecipeItem';
import {RecipeHomeStyles} from './RecipeHomeStyles';
import {useCategoryData} from './useCategoryData';
import {localStrings} from '../../shared/theme/Localise/localise';
import {useAuth} from '../../contexts/AuthContext';
import {SEARCH} from '../../assets/ImageConsts/ImageConsts';

type RecipeHomeProps = {
  name?: string;
};

export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

const RecipeHome: FC<RecipeHomeProps> = ({}) => {
  const {categoryData} = useCategoryData();
  const navigation = useNavigation();
  const {colors} = useTheme();
  const {authData} = useAuth();
  const styles = RecipeHomeStyles(colors);

  const renderUsername = () => {
    let name = authData?.name || localStrings.guestTitle;
    return (
      <Text style={styles.usernameText}>{getGreetings() + name + '!'}</Text>
    );
  };

  const renderSearchBar = () => {
    const {searchBarContainer, searchImage, searchBar} = styles;
    return (
      <View style={searchBarContainer}>
        <Image style={searchImage} source={SEARCH} />
        <TextInput style={searchBar} placeholder={localStrings.searchRecipes} />
      </View>
    );
  };

  const renderTrendingNow = () => {
    return (
      <View style={styles.trendingContainer}>
        <Section title={localStrings.trendingTitle} />
        <FlatList
          horizontal={true}
          data={categoryData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <RecipeItem
              item={item}
              onPress={() => {
                navigation.navigate('RecipeDetail');
              }}
            />
          )}
        />
      </View>
    );
  };

  const renderRecentItem = (item: Category) => {
    const {
      recentRecipeItemContainer,
      recentItemImage,
      recentItemTitleText,
      recentItemDescriptionText,
    } = styles;

    return (
      <View style={recentRecipeItemContainer}>
        <FastImage
          style={recentItemImage}
          source={{
            uri: item.strCategoryThumb,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />

        <Text style={recentItemTitleText}>
          {localStrings.recentDefaultTitle}
        </Text>
        <Text style={recentItemDescriptionText}>
          {localStrings.recentDefaultDescription}
        </Text>
      </View>
    );
  };

  const renderPopularItem = (item: Category) => {
    const {recentRecipeItemContainer, recentItemImage, popularTitleText} =
      styles;

    return (
      <View style={recentRecipeItemContainer}>
        <FastImage
          style={recentItemImage}
          source={{
            uri: item.strCategoryThumb,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={popularTitleText}>{localStrings.popularDefaultTitle}</Text>
      </View>
    );
  };

  const renderRecipieItem = (item: Category, itemType: String) => {
    if (itemType === 'recent') {
      return renderRecentItem(item);
    }
    return renderPopularItem(item);
  };

  const renderHorizontalList = (itemType: String) => {
    return (
      <View style={styles.horizontalListContainer}>
        <Section
          title={
            itemType === 'recent'
              ? localStrings.recentTitle
              : localStrings.popularTitle
          }
        />
        <FlatList
          horizontal={true}
          data={categoryData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => renderRecipieItem(item, itemType)}
        />
      </View>
    );
  };

  const getGreetings = () => {
    let myDate = new Date();
    let hours = myDate.getHours();
    let greet;

    if (hours < 12) {
      greet = localStrings.morningTitle;
    } else if (hours >= 12 && hours <= 17) {
      greet = localStrings.afternoonTitle;
    } else if (hours >= 17 && hours <= 24) {
      greet = localStrings.eveningTitle;
    }

    return localStrings.goodTitle + greet + ',\n';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.safeAreaContainer}>
        {renderUsername()}
        {renderSearchBar()}
        {renderTrendingNow()}
        {renderHorizontalList('recent')}
        {renderHorizontalList('popular')}
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeHome;
