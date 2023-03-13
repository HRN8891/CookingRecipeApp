/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LogIn from '../screens/LogIn/LogIn';
import RecipeHome from '../screens/RecipeHome/RecipeHome';
import SavedRecipe from '../screens/SavedRecipe/SaveRecipe';
import Notification from '../screens/Notification/Notification';
import Profile from '../screens/Profile/Profile';
import {useAuth} from '../contexts/AuthContext';
import RecipeDetail from '../screens/RecipeDetail/RecipeDetail';
import AddRecipe from '../screens/AddRecipe/AddRecipe';
import {
  HOME_TAB_ICON,
  NOTIFICATION_TAB_ICON,
  PLUS,
  PROFILE_TAB_ICON,
  UNION_ICON,
} from '../assets/ImageConsts/ImageConsts';
import {Image, TouchableOpacity} from 'react-native';
import {Theme} from '../shared/theme/themes';
import {createNavigationContainerRef} from '@react-navigation/native';
import MiddleButtonScreen from '../screens/MiddleButtonScreen/MiddleButtonScreen';
import SignUp from '../screens/SignUp/SignUp';
export const navigationRef = createNavigationContainerRef();

const AuthStackNavigator = createNativeStackNavigator();
const DashboardTab = createBottomTabNavigator();
const RecipeStackNavigator = createNativeStackNavigator();

export const Router = () => {
  const {authData} = useAuth();

  function AuthStack() {
    return (
      <AuthStackNavigator.Navigator screenOptions={{headerShown: false}}>
        <AuthStackNavigator.Screen name="LogIn" component={LogIn} />
        <RecipeStackNavigator.Screen name="SignUp" component={SignUp} />
      </AuthStackNavigator.Navigator>
    );
  }

  function RecipeStackNavigatorStack() {
    return (
      <RecipeStackNavigator.Navigator
        initialRouteName="RecipeHome"
        screenOptions={{headerShown: false}}>
        <RecipeStackNavigator.Screen name="RecipeHome" component={RecipeHome} />
      </RecipeStackNavigator.Navigator>
    );
  }

  const middleButton = () => {
    return (
      <>
        <TouchableOpacity
          style={{
            bottom: 30,
            height: 48,
            width: 48,
            borderRadius: 24,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: Theme.colors.primary,
          }}
          onPress={() => {
            navigationRef &&
              navigationRef.current &&
              navigationRef?.current?.navigate('AddRecipe');
          }}>
          <Image
            style={{height: 14, width: 14, tintColor: Theme.colors.white}}
            source={PLUS}
          />
        </TouchableOpacity>
      </>
    );
  };

  function HomeStack() {
    return (
      <DashboardTab.Navigator screenOptions={{headerShown: false}}>
        <DashboardTab.Screen
          name="Home"
          component={RecipeStackNavigatorStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={HOME_TAB_ICON}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused
                    ? Theme.colors.secondary
                    : Theme.colors.lightGrey,
                }}
              />
            ),
          }}
        />
        <DashboardTab.Screen
          name="SavedRecipe"
          component={SavedRecipe}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={UNION_ICON}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused
                    ? Theme.colors.secondary
                    : Theme.colors.lightGrey,
                }}
              />
            ),
          }}
        />
        <DashboardTab.Screen
          name="MiddleButtonScreen"
          component={MiddleButtonScreen}
          options={{
            tabBarLabel: '',
            tabBarButton: () => middleButton(),
          }}
        />
        <DashboardTab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={NOTIFICATION_TAB_ICON}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused
                    ? Theme.colors.secondary
                    : Theme.colors.lightGrey,
                }}
              />
            ),
          }}
        />
        <DashboardTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (
              <Image
                source={PROFILE_TAB_ICON}
                style={{
                  width: 28,
                  height: 28,
                  tintColor: focused
                    ? Theme.colors.secondary
                    : Theme.colors.lightGrey,
                }}
              />
            ),
          }}
        />
      </DashboardTab.Navigator>
    );
  }

  function DashboardStack() {
    return (
      <RecipeStackNavigator.Navigator>
        <RecipeStackNavigator.Screen
          name="Dashboard"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <RecipeStackNavigator.Screen
          name="RecipeDetail"
          component={RecipeDetail}
          options={{headerTitle: ''}}
        />
        <RecipeStackNavigator.Screen name="AddRecipe" component={AddRecipe} />
      </RecipeStackNavigator.Navigator>
    );
  }

  return (
    <NavigationContainer ref={navigationRef} theme={Theme}>
      {authData?.token ? DashboardStack() : AuthStack()}
    </NavigationContainer>
  );
};
