import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useAuth} from '../../contexts/AuthContext';
import {LOGIN_BACKGROUND, STAR} from '../../assets/ImageConsts/ImageConsts';
import Button from '../../components/Button/Button';
import {LogInStyles} from './LogInStyles';
import {useNavigation, useTheme} from '@react-navigation/native';
import {localStrings} from '../../shared/theme/Localise/localise';

type LogInProps = {};

const LogIn: FC<LogInProps> = ({}) => {
  const {colors} = useTheme();
  const {container, imageContainer} = LogInStyles(colors);
  const navigation = useNavigation();
  const auth = useAuth();

  const guestSignIn = async () => {
    await auth.guestSignIn();
  };

  const signUp = () => {
    navigation.navigate('SignUp');
  };

  const renderTopView = () => {
    const {topViewContainer, topImage, topText, topLeftText} =
      LogInStyles(colors);

    return (
      <View style={topViewContainer}>
        <Image style={topImage} source={STAR} />
        <Text style={topText}>
          <Text style={topLeftText}>{localStrings.number}</Text>
          {localStrings.premiumRecipe}
        </Text>
      </View>
    );
  };

  const renderBottomView = () => {
    const {
      bottomContainer,
      bottomViewContainer,
      titleText,
      descriptionText,
      signUpButton,
      startCookingButton,
      startCookingButtonTitle,
    } = LogInStyles(colors);
    return (
      <LinearGradient
        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']}
        style={bottomContainer}>
        <View style={bottomViewContainer}>
          <Text style={titleText}>{localStrings.yummTitle}</Text>
          <Text style={descriptionText}>{localStrings.findRecipe}</Text>
          <Button
            style={signUpButton}
            title={localStrings.signUp}
            onPress={signUp}
          />
          <Button
            style={startCookingButton}
            titleStyle={startCookingButtonTitle}
            title={localStrings.startCooking}
            onPress={guestSignIn}
          />
        </View>
      </LinearGradient>
    );
  };

  return (
    <View style={container}>
      <Image style={imageContainer} source={LOGIN_BACKGROUND} />
      {renderTopView()}
      {renderBottomView()}
    </View>
  );
};

export default LogIn;
