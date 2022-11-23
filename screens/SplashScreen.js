import { View, Text, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'

import image from '../assets/images/4.png'

const SplashScreen = ({navigation}) => {

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate('SignIn')
        },1000)
    },[])

  return (
    <ImageBackground source={image} resizeMode="cover" style={{flex:1}}>
      
    </ImageBackground>
  )
}

export default SplashScreen