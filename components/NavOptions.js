import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "567",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  return (
  <View>
    <FlatList
    showsHorizontalScrollIndicator={false}
      data={data}
      horizontal={true}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=>(
          console.log("Bhetreen")
        )}
        style={tw`p-2 pl-6 pb-4 pt-4 bg-gray-200 m-2 w-40 rounded-2xl`}>
          <View>
<Image source={{uri:item.image}} 
style={{width:100,height:100,resizeMode:'contain'}}/>
          </View>
          <Text style={{
            marginTop:2,
            fontSize:18,
            fontWeight:'bold',
          }}>{item.title}</Text>
          <Icon 
          style={tw`p-2 bg-black rounded-full w-10 mt-2`}
          type='antdesign' name="arrowright"  color="white" />
        </TouchableOpacity>
      )}


    />
  </View>
  );
};
export default NavOptions;

