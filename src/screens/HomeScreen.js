import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';

export default function HomeScreen() {


  return (
    <View>
      <Text>Hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
  cardTitle: {
    textAlign: 'left',
  },
});
