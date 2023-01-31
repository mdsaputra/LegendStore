import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {add1} from '../../assets/ads';
import {add2} from '../../assets/ads';

const BoxAds = ({ads}) => {
  const Iklan = () => {
    if (ads === 'ml') return <Image source={add1} style={styles.iklan} />;
    if (ads === 'pubg') return <Image source={add2} style={styles.iklan} />;

    // return <Image source={add2} style={styles.iklan} />;
  };
  return (
    <TouchableOpacity>
      <Iklan />
    </TouchableOpacity>
  );
};

export default BoxAds;

const styles = StyleSheet.create({
  iklan: {
    width: 340,
    height: 195,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },
});
