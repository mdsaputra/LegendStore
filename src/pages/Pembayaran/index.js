import {
  Text,
  StyleSheet,
  View,
  Button,
  Image,
  ImageBackground,
  TextInput,
  Platform,
  ScrollView,
  placeholder,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {Component} from 'react';
import {button, qr} from '../../assets/images';

import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default class GameDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <View style={styles.kode}>
            <Image source={qr} />
          </View>
          <View style={styles.bayar}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  'https://api.whatsapp.com/send/?phone=6282175617034&text&type=phone_number&app_absent=0',
                )
              }>
              <View style={styles.bayar}>
                <Image source={button} resizeMode="center" />
              </View>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#2E275D',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(89.3),
    width: '100%',
    backgroundColor: '#fff',
  },
  kode: {
    alignSelf: 'center',
    marginTop: 30,
  },
  bayar: {
    alignSelf: 'center',
    marginTop: 90,
  },
});
