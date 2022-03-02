import { StyleSheet, Text, View, TouchableOpacity,FlatList,Image } from "react-native";
import React,{ useState }  from "react";
import tw from 'tailwind-react-native-classnames';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

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
const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected,setSelected] = useState(null);
  return (
    <View style={tw`bg-white flex-grow`}>
    <View>
<TouchableOpacity 
onPress={()=>{ navigation.navigate('NavigationCard') }}
style={tw`absolute top-3 left-5 p-3 z-50 rounded-full bg-black`} >
<Icon name='chevron-left' type="fontawesome" color='white'/>
</TouchableOpacity>
      <Text style={tw`text-center my-5 text-xl`}>Select Your Ride</Text>
    </View>
    <FlatList data={data} 
      keyExtractor={(item)=>item.id}
      renderItem={({item : {id ,title ,multiplier ,image},item})=>(
       <TouchableOpacity style={tw`flex-row justify-between items-center px-10`}>
       <Image
         style={{
           width:100,
            height:100,
            resizeMode:'contain',
         }}
         source={{uri:image}}
       />
       <View style={tw`-ml-6`}>
         <Text style={tw`text-xl font-semibold`}>{title}</Text>
         <Text>Travel Time...</Text>
       </View>
     
       </TouchableOpacity> 
      )}
    />
    </View>
  );
};

export default RideOptionCard;

const styles = StyleSheet.create({});
