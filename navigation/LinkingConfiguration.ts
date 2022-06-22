/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';
import Units from '../screens/Units';


const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: 'home',
      Users: 'users',
      Assets: 'assets',
      Units: 'units',
      Companies: 'companies',
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
