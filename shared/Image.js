import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React from 'react'

const Image = (props) => {

    const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

    const imageBangalore = {
        uri: 'https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE',
      };

  return (
    <View
      style={{
        width: windowWidth / 2 - 10,
        height: windowHeight / 3,
        borderRadius: 10,
        border:1,
        borderBottomColor:'#fff'
        // backgroundColor: '#fff',
      }}>
    <TouchableOpacity style={[styles.card]}>
    <ImageBackground
      source={imageBangalore}
      resizeMode="cover"
      style={[styles.image]}
      imageStyle={{ borderRadius: 100}}
      >
      <Text style={styles.cardText}>{props.title}</Text>
    </ImageBackground>
  </TouchableOpacity>
  {props.children}
  </View>
  )
}


const styles = StyleSheet.create({
card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: '30%',
    // backgroundColor:'white',
    // borderWidth: 1,
    borderRadius:10,
    borderColor: '#000',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    // backgroundColor: 'blue',
    // borderRadius:50,
    // borderWidth: 5,
    
  },

  cardText: {
    // flex:1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  },

})

export default Image