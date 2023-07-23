import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {BoxAds, ListGame} from '../../components';
import {dummyGame} from '../../data';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      game: dummyGame,
    };
  }
  render() {
    const {game} = this.state;
    const {navigation} = this.props;
    return (
      <View>
        <ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.ads}>
              <BoxAds ads="ml" />
              <BoxAds ads="pubg" />
            </View>
          </ScrollView>

          <Text style={styles.judul}>Mobile Game</Text>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('GameDetail')}>
              <ListGame game="game1" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('ffDetail')}>
              <ListGame game="game2" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('pubgDetail')}>
              <ListGame game="game3" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('highDetail')}>
              <ListGame game="game4" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

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
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 5,
    marginRight: 10,
    marginLeft: 10,
  },
});
