import { NavigationContainer } from '@react-navigation/native';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../../../src/components/Button/Button';
import { Theme } from '../../../src/shared/theme/themes';
// import Button from '.';
import CenterView from '../CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Primary', () => (
    <NavigationContainer theme={Theme}>
      <Button title={"Primary Button"}/>
    </NavigationContainer>
  ))
  .add('Secondary', () => (
    <NavigationContainer theme={Theme}>
      <View style={{ padding: 20, backgroundColor: Theme.colors.lightGrey }}>
        <Button
          style={{
            marginTop: 16,
            width: 200,
            backgroundColor: Theme.colors.white,
          }}
          titleStyle={{ color: Theme.colors.primary }}
          title={"Secondary Button"}
        />
      </View>
    </NavigationContainer>
  ))
