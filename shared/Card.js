import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

const Card = props => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View
      style={{
        width: windowWidth / 2 - 10,
        height: windowHeight / 3,
        borderRadius: 10,
        border:1,
        borderBottomColor:'#fff',
        // backgroundColor: '#fff',
      }}>
      <View style={styles.cardContent}>
        <Image
          source={{
            uri: 'https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs',
          }}
          style={{
            width: windowWidth / 2 - 10,
            height: windowHeight / 5,
            borderRadius: 5,
            
          }}
        />
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // padding: 20,
    // borderColor: "#80bfff",
    // borderRadius: 10,
    // borderWidth: 1,
    // margin: 10,
    // backgroundColor: '#fff',
    // width: windowWidth /2 -10,
    // height: windowHeight /5,
  },
  cardContent: {},
});

export default Card;
