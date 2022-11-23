import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Stories from './Stories';
import Card from '../shared/Card';
import {ScrollView} from 'react-native-gesture-handler';
import FullCard from '../shared/FullCard';
import Image from '../shared/Image';

const Home = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Stories />


          {/* <View>
            <View>
              <Text style={styles.rowTitle}>Exclusives</Text>
            </View>

            <View style={styles.cardRow}>
                <FullCard>

                </FullCard>
            </View>
          </View> */}

          <View>
            <View>
              <Text style={styles.rowTitle}>Top Picks</Text>
            </View>

            <View style={styles.cardRow}>
              <ScrollView horizontal={true}>
                <View style={styles.cardContainer}>
                  <Card>
                    <Text style={styles.cardTitle}>
                      Candlelight: Vivaldi's Four Seasons
                    </Text>
                    <Text style={styles.cardPrice}>$20.00</Text>
                  </Card>
                </View>
                <View style={styles.cardContainer}>
                  <Card>
                    <Text style={styles.cardTitle}>
                      Candlelight: Vivaldi's Four Seasons
                    </Text>
                    <Text style={styles.cardPrice}>$20.00</Text>
                  </Card>
                </View>
                <View style={styles.cardContainer}>
                  <Card>
                    <Text style={styles.cardTitle}>
                      Candlelight: Vivaldi's Four Seasons
                    </Text>
                    <Text style={styles.cardPrice}>$20.00</Text>
                  </Card>
                </View>
              </ScrollView>
            </View>
          </View>

          
          <View>
            <View>
              <Text style={styles.rowTitle}>Folga Originals</Text>
            </View>

            <View style={styles.cardRow}>
              <ScrollView horizontal={true}>
                <View style={styles.cardContainer}>
                  <Image title="TITOS">
                  <Text style={styles.cardTitle}>
                      Candlelight: Vivaldi's Four Seasons
                    </Text>
                    {/* <Text style={styles.cardPrice}>$20.00</Text> */}
                    </Image>
                </View>

                <View style={styles.cardContainer}>
                  <Image title="MAMBO">
                  <Text style={styles.cardTitle}>
                      Candlelight: Vivaldi's Four Seasons
                    </Text>
                    {/* <Text style={styles.cardPrice}>$20.00</Text> */}
                    </Image>
                </View>

                <View style={styles.cardContainer}>
                  <Image title="SINQ">
                  <Text style={styles.cardTitle}>
                      Candlelight: Vivaldi's Four Seasons
                    </Text>
                    {/* <Text style={styles.cardPrice}>$20.00</Text> */}
                    </Image>
                </View>
              </ScrollView>
            </View>
          </View>

          <View>
            <View>
              <Text style={styles.rowTitle}>Top Picks</Text>
            </View>

            <View style={styles.cardRow}>
              <ScrollView horizontal={true}>
                <View style={styles.cardContainer}>
                  <Card>
                    <Text style={styles.cardTitle}>
                      Candlelight: Vivaldi's Four Seasons
                    </Text>
                    <Text style={styles.cardPrice}>$20.00</Text>
                  </Card>
                </View>
                <View style={styles.cardContainer}>
                  <Card>
                    <Text style={styles.cardTitle}>
                      Candlelight: Vivaldi's Four Seasons
                    </Text>
                    <Text style={styles.cardPrice}>$20.00</Text>
                  </Card>
                </View>
                <View style={styles.cardContainer}>
                  <Card>
                    <Text style={styles.cardTitle}>
                      Candlelight: Vivaldi's Four Seasons
                    </Text>
                    <Text style={styles.cardPrice}>$20.00</Text>
                  </Card>
                </View>
              </ScrollView>
            </View>
          </View>

          {/* <Stories/> */}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#28282B',
    paddingBottom:"20%"
  },

  // row and normal card styling

  cardRow: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    marginLeft: 10,
  },

  cardContainer: {
    marginRight: 10,
  },

  

  cardTitle: {
    color: '#fff',
    fontSize: 15,
    padding: 10,
    fontWeight: 'bold',
  },

  cardPrice: {
    // textAlign: 'right',
    color: '#fff',
    padding: 10,
    fontWeight: 'bold',
  },

  rowTitle: {
    color: '#fff',
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
  },

  // card two styling

  // cardTwoContainer:{
  //   margin:10
  // }
});

export default Home;
