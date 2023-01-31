import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ff, ml, pubg, high} from '../../assets/iconkecil';

const RiwayatPesanan = () => {
  return (
    <ScrollView>
      <View style={styles.pesanan}>
        <View style={styles.container}>
          <Image source={ff} />
          <View style={styles.txt}>
            <Text style={styles.judul}>Free Fire</Text>
            <Text
              style={{marginLeft: 180, marginBottom: 1, fontWeight: 'bold'}}>
              Selesai
            </Text>
            <Text>1.000 Diamonds</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Image source={ml} />
          <View style={styles.txt}>
            <Text style={styles.judul}>Mobile Legends</Text>
            <Text
              style={{marginLeft: 180, marginBottom: 1, fontWeight: 'bold'}}>
              Selesai
            </Text>
            <Text>699 Diamonds</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Image source={pubg} />
          <View style={styles.txt}>
            <Text style={styles.judul}>Pubg</Text>
            <Text
              style={{marginLeft: 180, marginBottom: 1, fontWeight: 'bold'}}>
              Selesai
            </Text>
            <Text>4.200 Diamonds</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Image source={high} />
          <View style={styles.txt}>
            <Text style={styles.judul}>High Dominos</Text>
            <Text
              style={{marginLeft: 180, marginBottom: 1, fontWeight: 'bold'}}>
              Selesai
            </Text>
            <Text>100 Diamonds</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Image source={high} />
          <View style={styles.txt}>
            <Text style={styles.judul}>High Dominos</Text>
            <Text
              style={{marginLeft: 180, marginBottom: 1, fontWeight: 'bold'}}>
              Selesai
            </Text>
            <Text>100 Diamonds</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Image source={pubg} />
          <View style={styles.txt}>
            <Text style={styles.judul}>Pubg</Text>
            <Text
              style={{marginLeft: 180, marginBottom: 1, fontWeight: 'bold'}}>
              Selesai
            </Text>
            <Text>8.200 Diamonds</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RiwayatPesanan;

const styles = StyleSheet.create({
  judul: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  txt: {
    marginTop: 5,
    marginLeft: 20,
    marginBottom: 10,
  },
  pesanan: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
  },

  container: {
    padding: 10,
    backgroundColor: 'white',
    marginBottom: 15,
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
