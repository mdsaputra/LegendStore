import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Inputan = ({textarea, width, height, fontsize, placeholder, label}) => {
  if (textarea) {
    return (
      <View>
        <Text>{label} :</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label(fontsize)}>{label} :</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Inputan;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: fontSize => ({
    fontSize: fontSize ? fontSize : 13,
    color: '#A09696',
  }),
  input: {
    width: 140,
    borderRadius: 2,
    backgroundColor: '#fff',
    margin: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 30,
  },
});
