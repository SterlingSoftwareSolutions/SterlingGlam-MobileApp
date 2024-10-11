import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import admin from '../api/admin';

const SalonServicesScreen = () => {
  const navigation = useNavigation();
  const [serviceCategories, setServiceCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddNewService = () => {
    navigation.navigate("AddService");
  };

  const handleService = (id, name) => {
    navigation.navigate("ServiceCategory", { serviceCatId: id, serviceCatName: name });
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const api = await admin();
      const response = await api.get('/categories');

      if (response.ok) {
        setServiceCategories(response.data);
      } else {
        console.error('Error fetching categories:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchData(); // Fetch data when the screen comes into focus
    }, [])
  );

  const renderServiceBox = ({ item }) => (
    <TouchableOpacity style={styles.serviceBox} onPress={() => handleService(item.id, item.name)}>
      <Text style={styles.serviceText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.heading}>Category/Services</Text>
      </View>

      <FlatList
        data={[...serviceCategories, { id: 'add_new'}]}
        renderItem={({ item }) =>
          item.id === 'add_new' ? (
            <TouchableOpacity >
              <Text style={styles.serviceText}>{item.name}</Text>
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
    paddingTop: 80
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
    borderRadius: 10,
    paddingVertical: 34
  },
  serviceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    alignContent: 'center',
    alignSelf: 'center',
    margin: 20,
    paddingLeft: 80
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  }
});

export default SalonServicesScreen;
