import React, { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../components/footer";
import { SafeAreaView } from "react-native-safe-area-context";
import admin from "../api/admin";

const ServiceCategoryScreen = ({ route, navigation }) => {
  const { serviceCatId, serviceCatName } = route.params;
  const [stylists, setStylists] = useState([]);
  const [selectedStylists, setSelectedStylists] = useState([]);
  const [serviceCategoryData, setServiceCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedStylist, setSelectedStylist] = useState(null);

  //select stylist remove function from category_stylist table
  const removeStylist = async (stylistId) => {
    try {
      // Ensure there is a stylist ID to delete
      if (stylistId) {
        const api = await admin(); // Get the configured API client

        // Prepare the delete payload for the single stylist
        const deletes = [
          {
            staff_id: stylistId,
            category_id: serviceCatId, // Ensure this is the correct category ID
          },
        ];

        // Log the prepared deletes for debugging
        console.log("Prepared deletes:", deletes);

        // Send DELETE request to the backend with the payload
        const response = await api.post("/staff/delete-category", {
          deletes,
          _method: "DELETE",
        }); // Use the payload as data

        // Handle response based on the status
        if (response.status === 200) {
          Alert.alert("Success", "Stylist deleted successfully", [
            {
              text: "OK",
              onPress: () => {
                // Remove the deleted stylist from the selectedStylists array
                setSelectedStylists(
                  selectedStylists.filter((id) => id !== stylistId)
                );
                navigation.goBack(); // Navigate back after deletion
              },
            },
          ]);
        } else {
          Alert.alert("Error", "Failed to delete the stylist");
          console.error(
            "Error Failed to delete the stylist. Status:",
            response.data.error
          );
        }
      } else {
        Alert.alert("Warning", "No stylist selected for deletion.");
      }
    } catch (error) {
      console.error("Error deleting stylist:", error);
      Alert.alert("Error", "Failed to delete the stylist. Please try again.");
    }
  };
  //
  const addStylist = (stylistId) => {
    if (!selectedStylists.includes(stylistId)) {
      setSelectedStylists([...selectedStylists, stylistId]);
    }
  };
  handleUpdateStylists;

  //add new stylist to category_stylist table
  const handleUpdateStylists = async () => {
    try {
      if (selectedStylists.length > 0) {
        console.log("Selected stylists:", selectedStylists);
        console.log("Service Category ID:", serviceCatId);

        const api = await admin(); // Assuming admin() is your configured API client

        // Log API configuration
        console.log("API Client Configured:", api);

        // Prepare the updates array with stylist IDs and the corresponding category ID
        const updates = selectedStylists.map((stylistId) => ({
          staff_id: stylistId, // Assuming selectedStylists contains stylist IDs
          category_id: serviceCatId, // Assuming serviceCatId is the category you want to assign
        }));

        // Log the prepared updates array
        console.log("Prepared updates:", updates);

        // Post selected stylists to the backend
        const response = await api.post("/staff-update-categories", {
          updates,
        });

        // Log the entire response object
        console.log("Response staff:", response);

        if (response.status === 200) {
          alert("Stylists updated successfully");
        } else {
          console.log("Error status:", response.status);
          alert("Error updating stylists");
        }
      } else {
        console.log("No stylists selected.");
        alert("No stylists selected.");
      }
    } catch (error) {
      console.error("Error updating stylists:", error);
      alert("Failed to update stylists.");
    }
  };

  // fetch service function
  const fetchService = async () => {
    setLoading(true);
    try {
      const api = await admin();
      const response = await api.get(`/servicesss?categoryId=${serviceCatId}`);

      if (response.status === 200) {
        const servicedata = response.data || [];
        const servicesForCategory = servicedata[serviceCatId];

        if (servicesForCategory) {
          setServiceCategoryData(servicesForCategory);
        } else {
          setServiceCategoryData([]);
        }
      } else {
        console.error("Error fetching data. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching service data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchService();
  }, [serviceCatId]);


  //already add stylist
  const fetchStylists = async () => {
    setLoading(true);
    try {
      const api = await admin();
      const response = await api.get("/staff");
      const StaffData = response.data.data || [];
      if (response.status === 200) {
        setStylists(StaffData);

        // Filter stylists that belong to the selected category
        const filteredStylists = StaffData.filter((stylist) =>
          stylist.categories.some((category) => category.id === serviceCatId)
        );

        setSelectedStylists(filteredStylists.map((stylist) => stylist.id)); // Save only IDs
      } else {
        console.error("Error fetching stylists. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching stylists:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchService();
    fetchStylists(); // Fetch all stylists and filter for selected ones
  }, [serviceCatId]);

  //delete function
  const deleteCategory = async () => {
    try {
      const api = await admin();
      const response = await api.delete(`/categories/${serviceCatId}`);

      if (response.status === 200) {
        Alert.alert("Success", "Category deleted successfully", [
          { text: "OK", onPress: () => navigation.goBack() }, // Navigate back after deletion
        ]);
      } else {
        Alert.alert("Error", "Failed to delete the category");
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      Alert.alert("Error", "Failed to delete the category");
    }
  };

  const renderServiceBox = (service) => (
    <TouchableOpacity key={service} style={styles.categoryButton}>
      <Text>{service}</Text>
    </TouchableOpacity>
  );

  const renderSelectedStylistBox = (stylist) => (
    <View key={stylist.id} style={styles.selectedStylistContainer}>
      <TouchableOpacity
        onPress={() => removeStylist(stylist.id)} // Pass the stylist's ID on click
      >
        <Text style={styles.selectedStylistName}>{stylist.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => removeStylist(stylist.id)} // Pass the stylist's ID on trash icon click
        style={styles.removeButton}
      >
        <Ionicons name="trash-bin" size={16} color="red" />
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{serviceCatName}</Text>
      </View>

      <Text style={styles.label}>Service Category Name</Text>
      <TextInput style={styles.input} value={serviceCatName} editable={false} />

      <Text style={styles.label}>Services</Text>
    </>
  );

  const renderFooter = () => (
    <>
      <TouchableOpacity
        style={styles.categoryButton}
        onPress={() => navigation.navigate("AddService")}
      >
        <Text>+ Add new</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Selected Stylists</Text>
      <View style={styles.selectedStylistsContainer}>
        {selectedStylists.map((id) => {
          const stylist = stylists.find((s) => s.id === id);
          return stylist ? renderSelectedStylistBox(stylist) : null;
        })}
      </View>

      <Text style={styles.label}>Stylists</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedStylist}
          onValueChange={(itemValue) => {
            if (itemValue && !selectedStylists.includes(itemValue)) {
              addStylist(itemValue); // Automatically add stylist when selected
            }
            setSelectedStylist(null); // Reset the dropdown selection after adding
          }}
          style={styles.pickerStyle}
        >
          <Picker.Item label="Select a stylist" value={null} />
          {stylists.map((stylist) => (
            <Picker.Item
              key={stylist.id}
              label={stylist.name}
              value={stylist.id}
            />
          ))}
        </Picker>
      </View>

      <TouchableOpacity
        style={styles.updateButton}
        onPress={handleUpdateStylists} // Call the function on button press
      >
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          Alert.alert(
            "Confirm Delete",
            "Are you sure you want to delete this category?",
            [
              { text: "Cancel", style: "cancel" },
              { text: "OK", onPress: deleteCategory },
            ]
          );
        }}
      >
        <Text style={styles.deleteButtonText}>Delete Category</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={serviceCategoryData}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        renderItem={({ item }) => renderServiceBox(item)}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.scrollContainer}
      />
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "center",
    paddingLeft: 120,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  selectedStylistsContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  categoryButton: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  removeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  selectedStylistContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedStylistName: {
    flex: 1,
  },
  updateButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    marginBottom: 20,
  },
  deleteButton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "red",
  },
  updateButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  deleteButtonText: {
    color: "red",
    fontWeight: "bold",
  },
  dropdownContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pickerStyle: {
    height: 50,
    width: "80%",
  },
});

export default ServiceCategoryScreen;
