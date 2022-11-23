import React, {useContext, useState, useEffect} from 'react';
import {AuthContext} from '../components/context';
import {globalStyles} from '../styles/global';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  AppRegistry,
} from 'react-native';
import Button from '../shared/Button';

import Api from '../helpers/Api';

import axios from 'axios';

import dynamicLinks from '@react-native-firebase/dynamic-links';

const SignIn = ({navigation}) => {
  const [phone, setPhone] = useState(null);

  //   const { signIn } = useContext(AuthContext);

  const onLoginPress = () => {
    console.log(phone);

    // try {
    //   Api.post('/customer/isuserpresent',{
    //     phone:phone
    //   })
    //   // fetch('http://localhost:4058/customer/isuserpresent', options)

    //   .then(
    //     (res, err) => {
    //       if (res) {
    //         console.log(res)
    //         console.log(res.json());

    //         // AsyncStorage.setItem('customerToken', res.data.CustomerRef);

    //         // navigation.replace('Home');
    //       }
    //       else{
    //         console.log("err is ===>>>",err)
    //       }
    //     },
    //   );
    // } catch (err) {
    //   console.log("error is ===>>>",err);
    // }

    const headers = {
      authorization: 'bnVsbDpudWxs',
    };
    const data={
      phone:phone
    }

    // fetch("http://206.189.134.218:4058/customer/isuserpresent",{
    //   method: 'GET',
    //   headers: {
    //     authorization: 'bnVsbDpudWxs',
    //     'Content-Type': 'application/json'
        
    //   },
    //   body: JSON.stringify(data)
    // } )


    Api
      .post(
        "/customer/isuserpresent",{
          phone,
        }
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(error => console.log('error is ===>>>', error));

    // signIn(phone);
  };

  // const handleDynamicLink = link => {
  //   alert(link.url);
  // };

  // useEffect(() => {
  //   const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
  //   dynamicLinks()
  //     .getInitialLink()
  //     .then(link => {
  //       alert(link.url);
  //       navigation.replace('Home');
  //     });
  //   // When the component is unmounted, remove the listener
  //   return () => unsubscribe();
  // }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <View>
          <Text style={styles.logoText}>SIGN IN </Text>
          <TextInput
            placeholder="Phone"
            placeholderColor="#c4c3cb"
            onChangeText={text => setPhone(text)}
            style={styles.loginFormTextInput}
          />
          <Button onPress={() => onLoginPress()} title="Login" />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00001a',
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
    color: '#80bfff',
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    width: 250,
    color:'#000'
  },
});

export default SignIn;
