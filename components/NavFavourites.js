import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

const data=[
    {
        id:123,
        icon:'home',
        location:'Home',
        destination: 'Code Street, London, UK',
    },
    {
        id:456,
        icon:'breifcase',
        location:'Work',
        destination: 'London Eye, London, UK',
    }
]

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => ( 
       <TouchableOpacity>
<Text>data</Text>
       </TouchableOpacity>
      )}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})