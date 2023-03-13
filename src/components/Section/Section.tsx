import {useTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ARROW_RIGHT} from '../../assets/ImageConsts/ImageConsts';
import { localStrings } from '../../shared/theme/Localise/localise';
import {SectionStyles} from './SectionStyles';

type SectionProps = {
  title: String;
  showRightButton?: boolean;
  onPress?: () => void;
};

const Section: FC<SectionProps> = ({
  title,
  showRightButton = true,
  onPress,
}) => {
  const {colors} = useTheme();
  const styles = SectionStyles(colors);
  const {container, titleText, viewAll, viewAllText, viewAllImage} = styles;

  return (
    <View style={container}>
      <Text style={titleText}>{title}</Text>
      {showRightButton && (
        <TouchableOpacity style={viewAll} onPress={onPress}>
          <Text style={viewAllText}>{localStrings.seeAll}</Text>
          <Image style={viewAllImage} source={ARROW_RIGHT} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Section;
