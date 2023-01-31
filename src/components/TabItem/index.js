import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IconHomeAktif,
  IconHomeOff,
  IconHistoryAktif,
  IconHistoryOff,
  IconUserAktif,
  IconUserOff,
} from '../../assets';
import {WARNA_UTAMA, WARNA_DISABLE} from '../../utils/constant';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home')
      return isFocused ? <IconHomeAktif /> : <IconHomeOff />;

    if (label === 'Pesanan')
      return isFocused ? <IconHistoryAktif /> : <IconHistoryOff />;

    if (label === 'Akun')
      return isFocused ? <IconUserAktif /> : <IconUserOff />;

    return <IconHomeOff />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 13,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
    marginTop: 5,
  }),
});
