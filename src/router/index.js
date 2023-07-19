import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Splash,
  Home,
  Pesanan,
  Akun,
  TopUp,
  GameDetail,
  ffDetail,
  pubgDetail,
  highDetail,
  Pembayaran,
} from '../pages';
import {BottomNavigator} from '../components/';
import {ListGame} from '../components/ListGame';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Pesanan" component={Pesanan} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUp"
        component={TopUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameDetail"
        component={GameDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ffDetail"
        component={ffDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="pubgDetail"
        component={pubgDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="highDetail"
        component={highDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
