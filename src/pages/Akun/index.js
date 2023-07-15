import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {dummyProfile} from '../../data';

export default class Akun extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: dummyProfile,
    };
  }
  render() {
    const {profile} = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Image source={profile.avatar} style={styles.foto} />
          <View style={styles.nama}>
            <Text>{profile.nama}</Text>
            <Text>{profile.noHp}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  nama: {
    marginLeft: 30,
    marginTop: 20,
    fontWeight: 'bold',
  },
  foto: {
    marginLeft: 12,
  },
});
