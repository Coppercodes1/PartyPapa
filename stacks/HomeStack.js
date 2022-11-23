import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

import BottomNavigation from '../components/BottomNavigation'

import SelectCity from '../screens/SelectCity';


const HomeStack = () => {

    console.disableYellowBox = true;

const Stack = createStackNavigator();
  return (
            // <Home/>
<>
<Home/>
            {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
            {/* <BottomNavigation/> */}
            {/* <Stack.Screen  options={{headerShown: false}} name="Home" component={Home} />
            <Stack.Screen  options={{
                title: 'Select Your City',
                headerStyle: {
                  backgroundColor: '#05233C',
                },
                headerTitleStyle: {
                  textAlign:'center',
                  color:"#fff"
                }
            }} name="SelectCity" component={SelectCity} /> */}
            </>

  )
}

export default HomeStack