import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Api from '../helpers/Api';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// import Image from '../shared/Image';

const Favourites = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.post('/favourite/getfavourite', {
      userReference: '24076350-5744-11ed-843d-2d3818fc7db6',
    })
      .then(res => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch(error => console.log('error is ===>>>', error));
  }, []);

  const Card = ({item}) => {
    console.log('this is runninfg', item.thumbnail);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
      <TouchableOpacity
        style={{
          width: windowWidth * 0.9,
        //   height: windowHeight / 2,
        }}>
        <View>
          <Image
            source={{
              uri: item.thumbnail,
            }}
            style={{
              width: windowWidth * 0.9,
              height: windowHeight / 3,
            }}
          />
          <Text style={styles.cardTitle}>
            {item.clubName}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {data.map(item => (
        <View key={item.clubId}>
          <Card item={item} />
        </View>
      ))}
      {data.map(item => (
        <View key={item.clubId}>
          <Card item={item} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28282B',
    paddingBottom: '20%',
    padding: '5%',
  },

  cardTitle:{
    textAlign:'center',
    color:'#fff',
    fontSize:20,
    paddingVertical:"3%"
  }
});

export default Favourites;
