import {Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const Signup = () => {
  const navigat = useNavigation();
  return (
    <View>
      <Text onPress={() => navigat.navigate('Profile')}>
        This is a Signup page;
      </Text>
    </View>
  );
};

export default Signup;
