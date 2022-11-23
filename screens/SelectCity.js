import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  useState,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// {selected == 0 ? styles.image: styles.image}

const SelectCity = ({navigation}) => {


  const [selected, setSelected] = React.useState(0)

  const imageGoa = {
    uri: 'https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs',
  };
  const imageBangalore = {
    uri: 'https://i.picsum.photos/id/1029/4887/2759.jpg?hmac=uMSExsgG8_PWwP9he9Y0LQ4bFDLlij7voa9lU9KMXDE',
  };

  return (
    <>
      {/* <View style={styles.container}>
        <View style={styles.card}>
          <ImageBackground
            source={imageGoa}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.cardText}>GOA</Text>
          </ImageBackground>
        </View>

        <View style={styles.card}>
          <ImageBackground
            source={imageBangalore}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.cardText}>BANGALORE</Text>
          </ImageBackground>
        </View>
      </View> */}
      
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> setSelected(1)} style={[styles.card , selected== 1 ? styles.selected : null]}>
          <ImageBackground
            source={imageGoa}
            resizeMode="cover"
            style={[styles.image]}>
            <Text style={styles.cardText}>GOA</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> setSelected(2)} style={[styles.card, selected== 2 ? styles.selected : null]}>
          <ImageBackground
            source={imageBangalore}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.cardText}>BANGALORE</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={styles.continueButton}>
        <Text style={styles.cardText}>CONTINUE</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05233C',
    // flexDirection: 'row',
  },

  selected:{
      borderWidth:5,
      borderColor:'#61E5CB',
      borderRadius:1,
      opacity:1
  },

  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
    // backgroundColor:'white',
    borderWidth: 1,
    borderRadius:10,
    borderColor: '#000',
    opacity:0.5
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'blue',
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

  continueButton: {
    backgroundColor: '#61E5CB',
    height: '8%',
    alignItems:'center',
    justifyContent:'center',
    zIndex:3,
  },
});

export default SelectCity;
