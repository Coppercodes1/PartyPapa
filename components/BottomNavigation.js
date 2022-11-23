import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon, {Icons} from '../components/Icons';
import Colors from '../constants/Colors';
import ColorScreen from './ColorScreen';
import * as Animatable from 'react-native-animatable';
import { Image } from 'react-native';
import Home from '../screens/Home'
import SignIn from './SignIn';


const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'grid',
    inActiveIcon: 'grid-outline',
    icon:<Image source={require("../assets/icons/home.png")}  style={{height:30, width:30}}  />,
    activeIcon: <Image source={require("../assets/gifs/home.gif")}  style={{height:30, width:30}}  />,
    // component: ColorScreen,
    component:SignIn
  },
  {
    route: 'Like',
    label: 'Like',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'heart-plus',
    inActiveIcon: 'heart-plus-outline',
    icon:<Image source={require("../assets/icons/wine.png")}  style={{height:30, width:30}}  />,
    activeIcon: <Image source={require("../assets/gifs/wine.gif")}  style={{height:30, width:30}}  />,
    component: SignIn,
  },
  {
    route: 'Search',
    label: 'Search',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'timeline-plus',
    inActiveIcon: 'timeline-plus-outline',
    icon:<Image source={require("../assets/icons/magnifying-glass.png")}  style={{height:30, width:30}}  />,
    activeIcon: <Image source={require("../assets/gifs/magnifying-glass.gif")}  style={{height:30, width:30}}  />,
    component: ColorScreen,
  },
  {
    route: 'Account',
    label: 'Account',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
    icon:<Image source={require("../assets/icons/ticket.png")}  style={{height:30, width:30}}  />,
    activeIcon: <Image source={require("../assets/gifs/ticket.gif")}  style={{height:30, width:30}}  />,
    component: ColorScreen,
  },
  {
    route: 'Add',
    label: 'Add',
    type: Icons.FontAwesome,
    activeIcon: 'user-circle',
    inActiveIcon: 'user-circle-o',
    icon:<Image source={require("../assets/icons/user-icon.png")}  style={{height:30, width:30}}  />,
    activeIcon: <Image source={require("../assets/gifs/user-icon.gif")}  style={{height:30, width:30}}  />,
    component: ColorScreen,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = props => {
    console.log()
    console.log(props)
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({
        0: {scale: 0.5},
        1: {scale: 1.5},
      });
    } else {
      viewRef.current.animate({
        0: {scale: 1.5},
        1: {scale: 1},
      });
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
    // onPress={()=> console.log("pressed")}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View ref={viewRef} duration={1000} style={styles.container}>
        {focused ? item.activeIcon : item.icon}
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 16,
        },
      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: props => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
    // backgroundColor:'#28282B'
  },
});
