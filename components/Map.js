import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView,{ Marker,mapType,coordinate } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlices';
const Map = () => {
    const origin =useSelector(selectOrigin)
  return (
    <MapView
    style={tw`flex-1`}
    // mapType='mutedstandard'
    initialRegion={{
      latitude: 24.898521, //origin.location.lat,
      longitude: 67.053789, //origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
    enablePoweredByContainer={false}
  >
{}
  </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})