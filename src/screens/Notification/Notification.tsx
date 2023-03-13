import React, {FC} from 'react';
import {Text, View} from 'react-native';

type NotificationProps = {
  name?: string;
};

const Notification: FC<NotificationProps> = () => {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
};

export default Notification;
