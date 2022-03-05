import { StyleSheet, Text, View, TouchableOpacity,FlatList,Image,SafeAreaView } from "react-native";
import React,{ useState }  from "react";
import tw from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import{ useSelector } from 'react-redux';
import { selectTravelTimeInformation } from "../slices/navSlices";

const data =[
  {
    id:"Uber-X-123",
    title:"UberX",
    multiplier:1,
    image:"https://links.papareact.com/3pn"
  },
  {
    id:"Uber-XL-456",
    title:"Uber XL",
    multiplier:1.2,
    image:"https://links.papareact.com/5w8"
  },
  {
    id:"Uber-LUX-789",
    title:"Uber LUX",
    multiplier:1.75,
    image:"https://links.papareact.com/7pf"
  },
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected,setSelected] = useState(null);
  const travelTimeInformation =useSelector(selectTravelTimeInformation)
  return (
<SafeAreaView>
    <View style={tw`bg-white flex-grow`}>
<View>
<TouchableOpacity 
onPress={()=>{ navigation.navigate('NavigationCard') }}
style={tw`absolute top-1 left-5 p-3 z-50 rounded-full bg-black`} >
<Icon name='chevron-left' type="fontawesome" color='white'/>
</TouchableOpacity>
      <Text style={tw`text-center my-3 text-xl`}>Select Your Ride - {travelTimeInformation?.distance.text}</Text>
    </View>
    <FlatList data={data} 
      keyExtractor={(item)=>item.id}
      renderItem={({item : {id ,title ,multiplier ,image},item})=>(
       <TouchableOpacity 
       onPress={()=>{setSelected(item)}}
       style={tw`flex-row justify-between items-center px-10 ${
         id === selected?.id && 'bg-gray-200'}`}>
       <Image
         style={{
           width:90,
            height:90,
            resizeMode:'contain',
         }}
         source={{uri:image}}
       />
       <View style={tw`-ml-6`}>
         <Text style={tw`text-xl font-semibold`}>{title}</Text>
         <Text>{travelTimeInformation?.distance.text} Travel Time</Text>
       </View>
       <Text style={tw`text-xl font-bold`}>Rs.{1*multiplier}</Text>
       </TouchableOpacity> 
      )}
    />
    <View>
      <TouchableOpacity disabled={!selected} style={tw`bg-black py-2 m-1 ${!selected && 'bg-gray-300'}`}>
<Text style={tw`text-center text-white text-xl`}>
  Choose {selected?.title}
</Text>
      </TouchableOpacity>
    </View>
    </View>
</SafeAreaView>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
