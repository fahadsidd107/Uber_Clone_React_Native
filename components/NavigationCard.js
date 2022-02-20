import { StyleSheet, Text, View, SafeAreaView,TextInput } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from '@env';
import{ useDispatch } from 'react-redux';
import { selectDestination, setDestination, setOrigin } from '../slices/navSlices';
import { useNavigation } from "@react-navigation/native";
const NavigationCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning , Muhammad Fahad Siddiqui</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
 <GooglePlacesAutocomplete 
 placeholder="Where to?"
   nearbyPlacesAPI="GooglePlacesSearch"
   debounce={400}
   styles={whereToInputBoxStyle}
   query={{
        key: GOOGLE_MAPS_APIKEY,
        language: 'en',
      }}
      onPress={(data, details = null) => {
        dispatch(
          setDestination({
          location:details.geometry.location,
          description:data.description
        }));
        navigation.navigate('RiderOptionCard')
        
      }}
      

 />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigationCard;

const whereToInputBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput:{
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer:{
    paddingHorizontal: 20,
    paddingBottom: 0,
  }

});
