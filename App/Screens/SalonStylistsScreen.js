import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/footer"; // Import the Footer component
import authClient from "../api/authClient";

const SalonStylistsScreen = () => {
  const navigation = useNavigation();
  const [stylistlist, setStylist] = useState([]);

  // Fetch the stylist data
  useEffect(() => {
    const fetchStylists = async () => {
      try {
        const response = await authClient.get("/staff"); // Fetch data from the API
        const stylistsData = response.data.data || []; // Access 'data' inside the response
        console.log("Fetched stylists data:", stylistsData); // Log the fetched data
        setStylist(stylistsData); // Set the stylist data in the state
      } catch (error) {
        console.error("Failed to fetch stylists", error); // Log the error
        Alert.alert("Error", "Failed to fetch stylists");
      }
    };
    fetchStylists(); // Call the function
  }, []);

  const handleAddNewService = () => {
    navigation.navigate("AddStylist");
  };

  // Render individual stylist
  const renderServiceBox = ({ item }) => (
    <TouchableOpacity
      style={styles.serviceBox}
      onPress={() => console.log(item)}
    >
      {/* Display the staff name */}
      <Text style={styles.serviceText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Stylists</Text>
      <FlatList
        data={[...(Array.isArray(stylistlist) ? stylistlist : []), { id: "add-new", name: "+ Add new" }]} // Safely spread the stylist array
        renderItem={({ item }) =>
          item.id === "add-new" ? (
            <TouchableOpacity
              style={styles.serviceBox}
              onPress={handleAddNewService}
            >
              <Text style={styles.serviceText}>{item.name}</Text>
            </TouchableOpacity>
          ) : (
            renderServiceBox({ item }) // Render each stylist's name
          )
        }
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />

      {/* Footer */}
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  serviceBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 2, // Add border
    borderColor: "#000", // Black border color
    padding: 20,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 34,
  },
  serviceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000", // Black font color
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000", // Black font color for heading
    alignSelf: "center",
    margin: 20,
  },
});

export default SalonStylistsScreen;
