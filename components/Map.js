import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MapView,{ Marker,mapType,coordinate } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { selectOrigin,selectDestination } from '../slices/navSlices';
import { MapViewDirections } from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useRef } from 'react';

const Map = () => {
    const origin =useSelector(selectOrigin)
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null)

   useEffect(()=>{
if (!origin && !destination) return;
mapRef.current.fitToSuppliedMarkers([origin,destination], {
    edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    animated: true,
    });
   },[ origin,destination])

   useEffect(()=>{},[origin,destination,GOOGLE_MAPS_APIKEY])
    
  return (
    <MapView
    ref={mapRef}
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
    <MapViewDirections
      origin={origin.description}
      destination={destination.description}
      apikey={GOOGLE_MAPS_APIKEY}
      strokeWidth={1}
      strokeColor="black"
    />
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