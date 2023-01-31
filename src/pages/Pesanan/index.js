import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RiwayatPesanan} from '../../components';

const Pesanan = () => {
  return (
    <ScrollView>
      <View style={styles.tes}>
        <RiwayatPesanan />
      </View>
    </ScrollView>
  );
};

export default Pesanan;

const styles = StyleSheet.create({});
