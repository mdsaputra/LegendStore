import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  Platform,
  ScrollView,
  placeholder,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {game1, game2} from '../../assets/game';
import {button} from '../../assets/images';
import {} from '../../data/dummyGame';
import {Bayar, Inputan, Pilihan} from '../../components';

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
          <ScrollView>
            <View style={styles.gambar}>
              <Image source={game2} />
            </View>
            <View style={styles.desc}>
              <Text style={styles.judul}>Free Fire</Text>
              <View style={styles.cara}>
                <Text>Cara order :</Text>
                <Text>1. Masukkan ID + (server)</Text>
                <Text>2. Pilih nominal diamond</Text>
                <Text>3. Pilih metode pembayaran</Text>
                <Text>4. Masukkan nomor Whatsapp dengan benar!</Text>
                <Text>5. Klik beli sekarang dan lakukan pembayaran</Text>
                <Text>6. Diamond akan masuk otomatis ke akun anda</Text>
                <Text>TRANSFER SESUAI TOTAL TAGIHAN !!!</Text>
              </View>
              <View style={styles.bg}>
                <Text style={styles.head}>Masukan Player ID</Text>
                <View style={styles.wrapperInput}>
                  <Inputan
                    label="Masukan ID"
                    width={responsiveWidth(166)}
                    height={responsiveHeight(33)}
                    fontSize={13}
                  />

                  <Inputan
                    label="zone id"
                    width={responsiveWidth(166)}
                    height={responsiveHeight(33)}
                    fontSize={13}
                  />
                </View>

                <Text style={styles.info}>
                  Harap memasukan ID dengan benar, kesalahan diluar tanggung
                  jawab kami
                </Text>
              </View>

              <View style={styles.bg}>
                <Text style={styles.head}>Pilih Nominal</Text>
                <View>
                  <Pilihan />
                </View>
                <Text style={styles.info}>Pilih Jumlah nominal Top-Up mu</Text>
              </View>
              <View style={styles.bg}>
                <Text style={styles.head}>Pilih Metode pembayaran</Text>
                <View>
                  <Bayar />
                </View>
                <Text style={styles.info}>
                  Pilih Metode Pembayaran Favorite Mu
                </Text>
              </View>
              <View style={styles.bg}>
                <Text style={styles.head}>Input WA Number</Text>
                <View style={styles.wrapperInput}>
                  <Inputan
                    width={responsiveWidth(166)}
                    height={responsiveHeight(33)}
                    fontSize={13}
                  />
                </View>
                <Text style={styles.info}>
                  Pilih Metode Pembayaran Favorite Mu
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Pembayaran')}>
              <View style={styles.bayar}>
                <Image source={button} resizeMode="center" />
              </View>
            </TouchableOpacity>
          </ScrollView>
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
  judul: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  head: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16,
  },
  head1: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16,
  },
  desc: {},
  gambar: {
    alignItems: 'center',
    marginTop: 30,
  },
  cara: {
    marginLeft: 30,
    marginTop: 30,
  },
  bg: {
    marginTop: 10,
    backgroundColor: '#D9D9D9',
  },
  info: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 25,
  },
  wrapperInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 25,
  },
  bayar: {
    alignItems: 'center',
  },
});
