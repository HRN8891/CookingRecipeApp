import React, {FC} from 'react';
import {Text, View} from 'react-native';

type ProfileProps = {
  name?: string;
};

const Profile: FC<ProfileProps> = () => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
