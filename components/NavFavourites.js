import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: 123,
    icon: "home",
    location: "Home",
    destination: "House # 8/23,A-Area, Liquatabad, Karachi, PAK",
  },
  {
    id: 456,
    icon: "briefcase",
    location: "Work",
    destination: "Baloch Colony Flyover, opposite Preston University, Near HBL, Karachi, PAK",
  },
  {
    id: 789,
    icon: "book-outline",
    location: "University",
    destination: "ST-16 University Rd, Block 5 Gulshan-e-Iqbal, Karachi, PAK",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View 
        style={[tw`bg-gray-300`,{height:0.5}]}
         />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={[tw`flex-row p-5`]}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <View style={{paddingRight:50}}>
            <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
