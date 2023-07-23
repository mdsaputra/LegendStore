import {AppRegistry, Platform} from 'react-native';
import {registerRootComponent} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

if (Platform.OS == 'android') {
  AppRegistry.registerComponent(appName, () => App);
} else {
  registerRootComponent(App);
}
