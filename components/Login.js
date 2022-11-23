import { View, Text } from 'react-native'
import React from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect, useReducer } from "react";
import { AuthContext } from '../helpers/context';
import Stories from '../stories/screens/Stories';
import Home from './Home';


const Login = () => {

    const [data, setData] = useState({});

  initialLoginState = {
    isLoading: true,
    customerRef: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...prevState,
          customerRef: action.token,
          isLoading: false,
        };

      case "LOGOUT":
        return {
          ...prevState,
          customerRef: null,
          isLoading: false,
        };

      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          customerRef: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      signIn: async (phone) => {
        let customerToken;
        customerToken = null;
        // try {
        //   axiosInstance
        //     .post("/api/customer/iscustomerpresent", {
        //       Phone: phone,
        //     })
        //     .then(async (response) => {
        //       console.log(response.data);
        //       setData(response.data);
        //       customerToken = response.data.Details.CustomerRef;

        //       await AsyncStorage.setItem("customerToken", customerToken);
        //       await AsyncStorage.setItem("phone", phone);

        //       dispatch({ type: "LOGIN", token: customerRef });
        //     });
        // } catch (e) {
        //   console.log(e);
        // }
      },
      signOut: async () => {
        console.log("logout");
        let customerToken = null;

        try {
          customerToken = await AsyncStorage.getItem("customerToken");
        } catch (e) {
          console.log(e);
        }

        // try {
        //   axiosInstance
        //     .post(
        //       "/api/device/userlogout",
        //       {
        //         UserRef: customerToken,
        //       },

        //       {
        //         headers: { AuthToken: authToken },
        //       }
        //     )
        //     .then(async (response) => {
        //       console.log(response.data);
        //       setData(response.data);
        //     });
        // } catch (e) {
        //   console.log(e);
        // }

        dispatch({ type: "LOGOUT" });
      },
    }),
    []
  );

  useEffect(() => {
    let customerRef;
    customerRef = null;

    setTimeout(async () => {
      try {
        customerRef = await AsyncStorage.getItem("customerRef");

        console.log(customerRef);
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: "RETRIEVE_TOKEN", token: customerRef });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={globalStyles.titleText}>Loading</Text>
      </View>
    );
  }

  return (
    // <View>
    //   <Text>Login</Text>
    // </View>
    <AuthContext.Provider value={authContext}>
      {loginState.customerRef != null ? <Home /> : <Stories />}
    </AuthContext.Provider>
  )
}

export default Login