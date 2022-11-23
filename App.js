import {NavigationContainer} from '@react-navigation/native';
import React, {Component, useEffect} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';

import dynamicLinks from '@react-native-firebase/dynamic-links';
import SignIn from './components/SignIn';
import Home from './screens/Home';
import SelectCity from './screens/SelectCity';
// import SelectCity from './screens/SelectCity';
// import {NavigationContainer} from '@react-navigation/native';

import BottomNavigation from './components/BottomNavigation';
import SplashScreen from './screens/SplashScreen';
import Bookings from './screens/Bookings';
import Favourites from './screens/Favourites';
import Booking from './screens/Booking';

console.disableYellowBox = true;

const Stack = createStackNavigator();

const App = ({navigation}) => {
  // const handleDynamicLink = link => {
  //   alert(link.url)
  // };

  // useEffect(() => {
  //   const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
  //   dynamicLinks()
  //     .getInitialLink()
  //     .then(link => {
  //       alert(link.url)
  //       navigation.navigate('Notifications')
  //     });
  //   // When the component is unmounted, remove the listener
  //   return () => unsubscribe();
  // }, []);

  return (
    <NavigationContainer>
      {/* <Home/> */}
      {/* <BottomNavigation/> */}
      <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Bookings">
      <Stack.Screen
        options={{headerShown: false}}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="TabNav"
        component={BottomNavigation}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Favourites"
        component={Favourites}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Bookings"
        component={Bookings}
      />

<Stack.Screen
        options={{headerShown: false}}
        name="Booking"
        component={Booking}
      />
      <Stack.Screen
        options={{
          title: 'Select Your City',
          headerStyle: {
            backgroundColor: '#05233C',
          },
          headerTitleStyle: {
            textAlign: 'center',
            color: '#fff',
          },
        }}
        name="SelectCity"
        component={SelectCity}
      />
    </Stack.Navigator>
    </NavigationContainer>
    // <Home/>
  );
};

export default App;
