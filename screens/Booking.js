import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../helpers/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Booking = ({navigation,route}) => {

    const [data, setData] = useState([]);

    const bookingGroupRef = route.params.bookingGroupRef

    useEffect(() => {
        // const bookingGroupRef = AsyncStorage.getItem('bookingGroupRef')
        console.log("bookingGroupRef===>>>",bookingGroupRef)

        console.log(route.params)

        Api.post('/booking/getbookingdetails', {
            bookingGroupRef: bookingGroupRef
        })
          .then(res => {
            console.log(res.data.data);
            setData(res.data.data)
          })
          .catch(error => console.log('error is ===>>>', error));
      }, []);
      

  return (
    <View>
      <Text>Booking</Text>
    </View>
  )
}

export default Booking