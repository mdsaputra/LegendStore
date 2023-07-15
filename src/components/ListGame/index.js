import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {dummyGame} from '../../data';
import {game1, game2, game3, game4} from '../../assets/game';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ListGame = ({game}) => {
  const List = () => {
    if (game === 'game1')
      return <Image source={game1} style={styles.container} />;
    if (game === 'game2')
      return <Image source={game2} style={styles.container} />;
    if (game === 'game3')
      return <Image source={game3} style={styles.container} />;
    if (game === 'game4')
      return <Image source={game4} style={styles.container} />;
  };
  return <List />;
};

export default ListGame;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
    marginRight: 10,
    marginLeft: 10,
  },
});
