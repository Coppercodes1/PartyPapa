import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Api from '../helpers/Api';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Bookings = ({navigation}) => {
  const [data, setData] = useState([]);


  

  useEffect(() => {
    Api.post('/booking/getallbookings', {
      customerRef: '24076350-5744-11ed-843d-2d3818fc7db6',
    })
      .then(res => {
        console.log(res.data.data);
        setData(res.data.data)
      })
      .catch(error => console.log('error is ===>>>', error));
  }, []);

  const handlePress = (item) =>{
    console.log('bookingGroupRef', item.bookingGroupRef)
    AsyncStorage.setItem('bookingGroupRef', item.bookingGroupRef)
    navigation.navigate('Booking', { bookingGroupRef: item.bookingGroupRef })

  }

  const Card = ({item}) => {
    console.log('this is running', item.thumbnail);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    

    return (
      <TouchableOpacity
        style={{
          width: windowWidth * 0.9,
        //   height: windowHeight / 2,
        }}
        onPress={()=> handlePress(item)}
        >
        <View>
          <Image
            source={{
              uri: "https://coppercodes.com/Folga/Images/Venue/Titos/titos1.jpg",
            }}
            style={{
              width: windowWidth * 0.9,
              height: windowHeight / 5,
            }}
          />
          <Text style={styles.cardTitle}>
            {item.clubName}
          </Text>
          <Text style={styles.cardTitle}>
            Total Amount : {item.totalAmount}
          </Text>
          <Text style={styles.cardTitle}>
            Discounted Amount : {item.totalAmount}
          </Text>
          <Text style={styles.cardTitle}>
            Rating : {item.Rating}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      {data.map(item => (
        <View key={item.bookingGroupRef}>
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
    fontSize:15,
    paddingVertical:"3%"
  }
});

export default Bookings;

