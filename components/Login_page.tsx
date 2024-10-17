import {Text, View} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigate = useNavigation();
  return (
    <View>
      <Text onPress={() => navigate.navigate('Signup')}>This is a Login Page;</Text>
    </View>
  );
};

export default Login;
