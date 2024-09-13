import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SalonStylistsScreen = () => {
  const navigation = useNavigation();

  const [stylists, setStylists] = useState([
    'Anderson', 
    'Peter', 
    'Clinton',
  ]);

  // const addNewService = (stylistName) => {
  //   if (!stylistName) {
  //     Alert.alert('Error', 'Stylist name cannot be empty');
  //     return;
  //   }
  //   setStylists([...stylists, stylistName]);
  //   Alert.alert('Success', `${stylistName} has been added!`);
  // };

  const handleAddNewService2 = () => {
    Alert.prompt(
      "Add New Stylist",
      "Enter the name of the new stylist:",
      (text) => addNewService(text)
    );
  };

  const handleAddNewService = () => {
    navigation.navigate("AddStylist");
  };

  const renderServiceBox = ({ item }) => (
    <TouchableOpacity style={styles.serviceBox} onPress={() => console.log(item)}>
      <Text style={styles.serviceText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Stylists</Text>
      <FlatList
        data={[...stylists, '+ Add new']}
        renderItem={({ item }) =>
          item === '+ Add new' ? (
            <TouchableOpacity style={styles.serviceBox} onPress={handleAddNewService}>
              <Text style={styles.serviceText}>{item}</Text>
            </TouchableOpacity>
          ) : (
            renderServiceBox({ item })
          )
        }
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  serviceBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    paddingVertical:34
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  heading:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    alignContent:'center',
    alignSelf:'center',
    margin:20
  }
});

export default SalonStylistsScreen;
