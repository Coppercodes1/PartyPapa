import {
    createStackNavigator,
    CardStyleInterpolators,
  } from '@react-navigation/stack';
  import React from 'react';
  import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
  
  import ScreenSplashscreen from '@app/screens/ScreenSplashscreen/ScreenSplashscreen';
  import ScreenSignInScreen from '@app/screens/ScreenSignInscreen/ScreenSignInscreen';
  import ScreenHomescreen from '@app/screens/ScreenHomescreen/ScreenHomescreen';
  import ScreenUserDetailsscreen from '@app/screens/ScreenProfilescreeen/ScreenUserDetailsscreen';
  import ScreenUserProfileScreen from '@app/screens/ScreenProfilescreeen/ScreenUserProfileScreen';
  import ScreenVehicleListScreen from '@app/screens/ScreenVehicleListScreen/ScreenVehicleListScreen';
  import ScreenVehicleListScreen2 from '@app/screens/ScreenVehicleListScreen/ScreenVehicleListScreen2';
  import ScreenVehicleDetailsScreen from '@app/screens/ScreenVehicleDetailsscreen/ScreenVehicleDetailsScreen';
  import ScreenSavedLocationScreen from '@app/screens/ScreenSavedLocationscreen/ScreenSavedLocationScreen';
  import ScreenAddressDetailsScreen from '@app/screens/ScreeenAddressDetailsScreen/ScreenAddressDetailsScreen';
  import {
    View,
    Text,
    TextInput,
    Image,
    Dimensions,
    useWindowDimensions,
  } from 'react-native';
  
  import colors from '@app/assets/colors';
  import images from '@app/assets/images';
  import {
    responsiveHeight,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import commonStyles from '@app/assets/styles/commonStyles';
  import {moderateScale, verticalScale} from 'react-native-size-matters';
  import ScreenCarouselScreen2 from '@app/screens/ScreenCarouselscreen/ScreenCarouselScreen2';
  import ScreenSelectLocationScreen from '@app/screens/ScreenSelectLocationscreen/ScreenSelectLocationScreen';
  import ScreenFeedbackScreen from '@app/screens/ScreenFeedbackscreen/ScreenFeedbackScreen';
  import ScreenPaymentCompletion from '@app/screens/ScreenPaymentCompletion/ScreenPaymentCompletion';
  import ScreenThankYou from '@app/screens/ScreenPaymentCompletion/ScreenThankYou';
  import ScreenYourTripsScreen from '@app/screens/ScreenYourTripsscreen/ScreenYourTripsScreen';
  import ScreenPhoneLogin from '@app/screens/ScreenSignInscreen/ScreenPhoneLogin';
  import Locations from '@app/screens/ScreenMaps/Locations';
  import ScreenNotificationScreen from '@app/screens/ScreenNotificationScreen/ScreenNotificationScreen';
  import ScreenSavedLocationScreen2 from '@app/screens/ScreenSavedLocationscreen/ScreenSavedLocationScreen2';
  import CompletedTripDetails from '@app/screens/ScreenYourTripsscreen/CompletedTripDetails';
  import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
  import Header from '@app/components/Header/Header';
  import ScreenYourtripsCompleted from '@app/screens/ScreenYourTripsscreen/ScreenYourtripsCompleted';
  import ScreenYourtripsScheduled from '@app/screens/ScreenYourTripsscreen/ScreenYourtripsScheduled';
  
  import {TabViewAnimated} from 'react-native-tab-view';
  import AllTrips from '@app/screens/ScreenYourTripsscreen/AllTrips';
  import ScreenContactSupportScreen from '@app/screens/ScreenContactSupport/ScreenContactSupportScreen';
  import ScreenWallet from '@app/screens/ScreenWallet/ScreenWallet';
  import ScreenWalletTransaction from '@app/screens/ScreenWalletTransaction/ScreenWalletTransaction';
  import ScreenSelectPaymentOption from '@app/screens/ScreenSelectPaymentOption/ScreenSelectPaymentOption';
  import ScreenPaymentSuccessful from '@app/screens/ScreenPaymentSuccessful/ScreenPaymentSuccessful';
  
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Tabo = createMaterialTopTabNavigator();
  
  let BottomTabs = () => (
    <Tab.Navigator
      //   barStyle={{ backgroundColor: '#101645',
      //             //  height:moderateScale(40)
      // }}
  
      //  style={{backgroundColor:'#101645'}}
      headerMode="none"
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: colors.DarkBlueBG,
          height: responsiveHeight(7.5),
        },
        // tabBarPosition: 'bottom',
        tabBarIcon: ({focused, color, size}) => {
          let imageUri;
          if (route.name === 'HomeScreen') {
            imageUri = images.BookNowPicLight;
          } else if (route.name === 'VehiclelList') {
            imageUri = images.CarPicLight;
          } else if (route.name === 'AllTrips') {
            imageUri = images.YourTripsLight;
          } else if (route.name === 'UserProfile') {
            imageUri = images.ProfileLight;
          }
          return (
            <View>
              <Image
                style={{
                  width: Dimensions.get('screen').width / 15,
                  height: Dimensions.get('screen').height / 40,
                  tintColor: focused ? colors.white : colors.silver,
                }}
                source={imageUri}
                color={color}
                resizeMode={'contain'}
              />
            </View>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.silver,
        labelStyle: {
          bottom: 5,
          fontFamily: 'Roboto-Regular',
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={ScreenHomescreen}
        headerMode="none"
        options={{
          headerTitle: props => null,
          headerShown: false,
          title: 'Book Now',
        }}
      />
      <Tab.Screen
        name="VehiclelList"
        component={ScreenVehicleListScreen}
        options={{
          headerTitle: props => null,
          headerShown: false,
          title: 'Your cars',
        }}
      />
      <Tab.Screen
        name="AllTrips"
        component={AllTrips}
        options={{
          // headerTitle: props => null,
          headerShown: false,
          title: 'Your Trips',
        }}
      />
      <Tab.Screen
        name="UserProfile"
        component={ScreenUserProfileScreen}
        options={{
          headerTitle: props => null,
          headerShown: false,
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
  
  export let MaterialTabs = ({navigation}) => {
    const layout = useWindowDimensions();
    return (
      <View
        style={{
          height: layout.height,
          width: layout.width,
          backgroundColor: colors.DarkBlueBG,
          overflow: 'hidden',
        }}>
        <Header
          back
          onPress={() => {
            navigation.push('HomeScreen');
          }}
          title={'Your Trips'}
        />
        <Tabo.Navigator
          // swipeEnabled={true}
  
          animationEnabled={false}
          initialLayout={{width: layout.width * 2}}
          // tabBarScrollEnabled={true}
          tabBarOptions={{
            // activeTintColor: colors.white,
            // inactiveTintColor: 'black',
            labelStyle: {
              color: colors.white,
              FontFace: 'Roboto-Medium',
              fontSize: moderateScale(15),
              textAlign: 'center',
              alignSelf: 'center',
            },
            indicatorStyle: {
              borderBottomColor: 'white', //line under the labels
              borderBottomWidth: 2,
            },
            tabBarItemStyle: {tabBarScrollEnabled: true},
            style: {
              width: '100%',
              backgroundColor: colors.BlueModalBG,
              paddingTop: responsiveHeight(2),
              borderTopLeftRadius: verticalScale(20),
              borderTopRightRadius: verticalScale(20),
            },
          }}>
          {/* <TabViewAnimated
            const initialLayout={{
              height: 0,
              width: Dimensions.get('window').width,  
            }}
            > */}
          <Tabo.Screen
            name="YourTrips"
            component={ScreenYourTripsScreen}
            options={{tabBarLabel: 'Ongoing'}}
          />
          <Tabo.Screen
            name="YourtripsScheduled"
            component={ScreenYourtripsScheduled}
            options={{tabBarLabel: 'Scheduled'}}
          />
          <Tabo.Screen
            name="YourtripsCompleted"
            component={ScreenYourtripsCompleted}
            options={{tabBarLabel: 'Completed'}}
          />
          {/* </TabViewAnimated> */}
        </Tabo.Navigator>
      </View>
    );
  };
  
  let stackNav = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={ScreenSplashscreen} />
  
      <Stack.Screen name="CarouselScreen2" component={ScreenCarouselScreen2} />
      <Stack.Screen name="SignInScreen" component={ScreenSignInScreen} />
      <Stack.Screen
        name="HomeScreen"
        // component={ScreenHomescreen}
        component={BottomTabs}
      />
  
      <Stack.Screen name="UserDetails" component={ScreenUserDetailsscreen} />
      <Stack.Screen name="UserProfile" component={ScreenUserProfileScreen} />
      <Stack.Screen name="VehiclelList" component={ScreenVehicleListScreen} />
      <Stack.Screen name="VehiclelList2" component={ScreenVehicleListScreen2} />
      <Stack.Screen
        name="VehicleDetails"
        component={ScreenVehicleDetailsScreen}
      />
      <Stack.Screen name="YourTrips" component={ScreenYourTripsScreen} />
      <Stack.Screen
        name="YourtripsCompleted"
        component={ScreenYourtripsCompleted}
      />
      <Stack.Screen
        name="YourtripsScheduled"
        component={ScreenYourtripsScheduled}
      />
      <Stack.Screen name="SavedLocation" component={ScreenSavedLocationScreen} />
      <Stack.Screen
        name="SavedLocation2"
        component={ScreenSavedLocationScreen2}
      />
      <Stack.Screen
        name="SaveAddressLocation"
        component={ScreenAddressDetailsScreen}
      />
      <Stack.Screen
        name="SelectLocation"
        component={ScreenSelectLocationScreen}
      />
      <Stack.Screen name="Feedback" component={ScreenFeedbackScreen} />
      <Stack.Screen name="PaymentComplete" component={ScreenPaymentCompletion} />
      <Stack.Screen name="ThankYou" component={ScreenThankYou} />
      <Stack.Screen name="PhoneLogin" component={ScreenPhoneLogin} />
      <Stack.Screen name="Locations" component={Locations} />
      <Stack.Screen name="Notification" component={ScreenNotificationScreen} />
      <Stack.Screen name="CompletedTrip" component={CompletedTripDetails} />
      <Stack.Screen name="AllTrips" component={AllTrips} />
      <Stack.Screen
        name="ContactSupport"
        component={ScreenContactSupportScreen}
      />
      <Stack.Screen name="Wallet" component={ScreenWallet} />
      <Stack.Screen
        name="WalletTransaction"
        component={ScreenWalletTransaction}
      />
      <Stack.Screen
        name="SelectPaymentOption"
        component={ScreenSelectPaymentOption}
      />
      <Stack.Screen
        name="PaymentSuccessful"
        component={ScreenPaymentSuccessful}
      />
    </Stack.Navigator>
  );
  
  export default stackNav;
  
  