import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const data = [
  {
    id:123,
    title: 'Get a ride',
    image: 'https://picsum.photos/200/300',
    screen: 'MapScreen',
  },
  {
    id:567,
    title: 'Order Food',
    image: 'https://picsum.photos/200/300',
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  return (
    <View>
      <Text>NavOptions</Text>
    </View>
  );
};

export default NavOptions;

const styles = StyleSheet.create({});

