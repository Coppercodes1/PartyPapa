import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const FullCard = props => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  const imageGoa = {
    uri: 'https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs',
  };

  return (
    <View
      style={{
        width: windowWidth - 10,
        height: windowWidth / 2,
        borderRadius: 10,
        backgroundColor: '#fff',
      }}>
      <View style={styles.cardContent}>
      <View style={{ flex: 1 }}>
      <Carousel
    width={windowWidth}
    data={[{ color: 'red' }, { color: 'purple' }, { color: 'yellow' }]}
    renderItem={({ color }) => {
        return <View style={{ backgroundColor: color, flex: 1 }} />;
    }}
/>
        </View>
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
    backgroundColor: '#fff',
    // width: windowWidth /2 -10,
    // height: windowHeight /5,
  },
  cardContent: {},
});

export default FullCard;
