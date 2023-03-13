import React, {FC, useState} from 'react';
import {View, Text, ScrollView, TextInput, Alert} from 'react-native';
import Button from '../../components/Button/Button';
import {SignUpStyles} from './SignUpStyles';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAuth} from '../../contexts/AuthContext';
import {localStrings} from '../../shared/theme/Localise/localise';

type SignUpProps = {};
type User = {
  firstName?: String;
  lastName?: String;
  email?: String;
  password?: String;
};

const SignUp: FC<SignUpProps> = ({}) => {
  const {colors} = useTheme();
  const [user, setUser] = useState<User>();
  const auth = useAuth();
  const {
    container,
    safeAreaContainer,
    recipeTextInput,
    signUpButton,
    signUpContainer,
    placeholderText,
  } = SignUpStyles(colors);
  const signUp = async () => {
    if (
      user === undefined ||
      user.firstName === undefined ||
      user.firstName?.trim().length === 0 ||
      user.lastName === undefined ||
      user.lastName?.trim().length === 0 ||
      user.email === undefined ||
      user.email?.trim().length === 0 ||
      user.password === undefined ||
      user.password?.trim().length === 0
    ) {
      Alert.alert(
        localStrings.invalidDataTitle,
        localStrings.invalidDataMessage,
      );
      return;
    }
    await auth.signIn();
  };

  return (
    <SafeAreaView style={container}>
      <ScrollView style={safeAreaContainer}>
        <View style={container}>
          <Text style={signUpContainer}>{localStrings.signUp}</Text>
          <Text style={placeholderText}>{localStrings.firstNameTitle}</Text>
          <TextInput
            style={recipeTextInput}
            placeholder={localStrings.firstNameTitle}
            onChangeText={text => setUser({...user, firstName: text})}
          />
          <Text style={placeholderText}>{localStrings.lastNameTitle}</Text>
          <TextInput
            style={recipeTextInput}
            placeholder={localStrings.lastNameTitle}
            onChangeText={text => setUser({...user, lastName: text})}
          />
          <Text style={placeholderText}>{localStrings.emailTitle}</Text>
          <TextInput
            style={recipeTextInput}
            placeholder={localStrings.emailTitle}
            onChangeText={text => setUser({...user, email: text})}
          />
          <Text style={placeholderText}>{localStrings.passwordTitle}</Text>
          <TextInput
            style={recipeTextInput}
            placeholder={localStrings.passwordTitle}
            secureTextEntry={true}
            onChangeText={text => setUser({...user, password: text})}
          />
          <Button
            style={signUpButton}
            title={localStrings.signUp}
            onPress={signUp}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
