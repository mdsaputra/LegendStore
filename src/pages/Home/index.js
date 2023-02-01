import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BoxAds from '../../components/box';

const Home = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.ads}>
          <BoxAds ads="ml" />
          <BoxAds ads="pubg" />
        </View>
      </ScrollView>
      <Text style={styles.judul}>Mobile Gamee</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  ads: {
    flexDirection: 'row',
  },
  judul: {
    marginTop: 20,
    fontSize: 20,
    marginLeft: 28,
    fontWeight: 'bold',
  },
  Pilih: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    flexWrap: 'wrap',
    marginLeft: 28,
  },
});
