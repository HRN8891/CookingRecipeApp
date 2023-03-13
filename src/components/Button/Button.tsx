import { useTheme } from '@react-navigation/native';
import React, {FC} from 'react';
import {Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import {ButtonStyles} from './ButtonStyles';

type ButtonProps = {
  title: String;
  onPress: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
};

const Button: FC<ButtonProps> = ({title, onPress, style, titleStyle}) => {
  const {colors} = useTheme();
  const {container, titleText} = ButtonStyles(colors);

  return (
    <TouchableOpacity style={[container, style]} onPress={onPress}>
      <Text style={[titleText, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
