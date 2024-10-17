import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Login from './components/Login_page';
import Signup from './components/Signup-Page';
import Profile from './components/Profile';
import Invoice from './components/Invoice';
import News from './components/News-feed';

const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Profile">
        <stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <stack.Screen
          name="Signup"
          component={Signup}
          options={{title: 'Signup'}}
        />
        <stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile', headerShown: false}}
        />
        <stack.Screen
          name="Invoice"
          component={Invoice}
          options={{title: 'Invoice'}}
        />
        <stack.Screen
          name="NewsFeed"
          component={News}
          options={{title: 'NewsFeed'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
