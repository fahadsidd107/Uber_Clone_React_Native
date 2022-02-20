import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView,{ Marker,mapType,coordinate } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin,selectDestination } from '../slices/navSlices';
import { MapViewDirections } from 'react-native-maps-directions';

const Map = () => {
    const origin =useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
  return (
    <MapView
    style={tw`flex-1`}
    // mapType='mutedstandard'
    initialRegion={{
      latitude: 24.898521,  //origin.location.lat,
      longitude: 67.053789, //origin.location.lng,
      latitudeDelta: 0.006,
      longitudeDelta: 0.006,
    }}
    enablePoweredByContainer={false}
  >
  {origin && destination (
    <MapViewDirections/>
  )}
{origin?.location && (
    <Marker
      coordinate={{
        latitude: 24.898521,
        longitude: 67.053789,
      }}
      title='Origin'
      description={origin.description}
      identifier='Origin'
    />
)

}
  </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})