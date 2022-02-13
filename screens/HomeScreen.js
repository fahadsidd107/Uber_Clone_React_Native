import { View, Text,SafeAreaView,StatusBar,Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import{ useDispatch } from 'react-redux';
import { setDestination, setOrigin } from './../slices/navSlice';
console.log(GOOGLE_MAPS_APIKEY);
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View
     style={{marginTop:StatusBar.currentHeight}}
     >
    {/* agr {} k ander[] krke normal styling dena chahain to krste hain  */}
      <View style={tw`p-5`}>
        <Image
        style={{
          width:100,
          height:100,
          resizeMode:'contain',
        }}
          source={{
            uri:'https://links.papareact.com/gzs',
          }}
        />
        <GooglePlacesAutocomplete
      placeholder='Search your place'
      styles={{
        container: {
          flex: 0,
        },
        textInput: {
          fontSize: 14,
        }
      }}
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      fetchDetails={true}
      returnKeyType={'search'}
      enablePoweredByContainer={false}
      minLength={2} // minimum length of text to search
      query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
      nearbyPlacesAPI='GooglePlacesSearch'
      debounce={400}
    />
        <NavOptions/>
      </View>
    </View>
  );
};

export default HomeScreen;
