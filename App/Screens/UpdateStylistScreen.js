import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../components/footer";
import authClient from "../api/authClient";

const UpdateStylistScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Access route params
  const { stylist } = route.params; // Get the stylist object from route params

  const [stylistName, setStylistName] = useState(stylist ? stylist.name : "");
  const [contactNumber, setContactNumber] = useState(
    stylist ? stylist.contact_number : ""
  );
  const [selectedRating, setSelectedRating] = useState(
    stylist ? stylist.ratings : 0
  );
  const [selectedServices, setSelectedServices] = useState(
    stylist && stylist.categories ? stylist.categories.map(category => category.id) : []
  );
  const [services, setServices] = useState([]);

  // Fetch services when the component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Fetch services
        const servicesResponse = await authClient.get("/categories");
        setServices(servicesResponse.data);
      } catch (error) {
        console.error("Failed to fetch services", error);
        Alert.alert("Error", "Failed to load services.");
      }
    };

    fetchServices();
  }, []);

  // Toggle service selection
  const toggleService = (service) => {
    if (selectedServices.includes(service.id)) {
      setSelectedServices(selectedServices.filter((item) => item !== service.id));
    } else {
      setSelectedServices([...selectedServices, service.id]);
    }
  };

  // Handle updating a stylist
  const handleUpdateStylist = async () => {
    if (
      !stylistName ||
      !contactNumber ||
      selectedRating === 0 ||
      selectedServices.length === 0
    ) {
      Alert.alert(
        "Error",
        "Please fill all fields and select at least one service."
      );
      return;
    }

    try {
      // Call the API to update the stylist using authClient
      const response = await authClient.post(`/staff-update/${stylist.id}`, {
        name: stylistName,
        contact_number: contactNumber,
        ratings: selectedRating,
        category_ids: selectedServices, // Use the selected service IDs
      });

      if (response.status === 200) {
        Alert.alert("Success", "Stylist updated successfully.");
        navigation.navigate("AdminDashboard");
      } else {
        Alert.alert("Error", response.data.message || "Failed to update stylist.");
      }
    } catch (error) {
      console.error("Error updating stylist:", error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

  // Delete stylist function
  const deleteService = async () => {
    try {
      // Confirm before deletion
      Alert.alert(
        "Confirm Deletion",
        "Are you sure you want to delete this stylist?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Delete",
            onPress: async () => {
              // Call the delete API endpoint with the stylist ID
              const response = await authClient.delete(`/staff/${stylist.id}`);

              if (response.status === 200) {
                Alert.alert("Success", "Stylist deleted successfully.");
                // Navigate back to the dashboard or desired screen
                navigation.navigate("AdminDashboard");
              } else {
                Alert.alert("Error", "Failed to delete the stylist.");
              }
            },
          },
        ]
      );
    } catch (error) {
      console.error("Error deleting stylist:", error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Update Stylist</Text>
        </View>

        <Text style={styles.label}>Stylist Name</Text>
        <TextInput
          style={styles.input}
          value={stylistName}
          onChangeText={setStylistName}
        />

        <Text style={styles.label}>Stylist Ratings</Text>
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity
              key={star}
              onPress={() => setSelectedRating(star)}
            >
              <FontAwesome
                name={star <= selectedRating ? "star" : "star-o"}
                size={24}
                color="gold"
              />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Stylist Contact Number</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={contactNumber}
          onChangeText={setContactNumber}
        />

        <Text style={styles.label}>Categories</Text>
        <View style={styles.servicesContainer}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.id}
              style={[
                styles.serviceBox,
                selectedServices.includes(service.id) && styles.selectedService,
              ]}
              onPress={() => toggleService(service)}
            >
              <Text style={[styles.serviceText, selectedServices.includes(service.id) && styles.selectedServiceText]}>
                {service.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleUpdateStylist}>
          <Text style={styles.addButtonText}>Update Stylist</Text>
        </TouchableOpacity>

        {/* Delete Stylist Button */}
        <TouchableOpacity style={styles.deleteButton} onPress={deleteService}>
          <Text style={styles.deleteButtonText}>Delete Stylist</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 20,
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceBox: {
    width: "48%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  selectedService: {
    backgroundColor: "#000", // Black background for selected service
    borderColor: "#000",
  },
  serviceText: {
    color: "#333", // Default text color
  },
  selectedServiceText: {
    color: "#fff", // White text for selected service
  },
  addButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: '80%',
    alignSelf: 'center',
    marginTop: 20
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: '80%',
    alignSelf: 'center',
    marginTop: 20
  },
  deleteButtonText: {
    color: "#FF0000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UpdateStylistScreen;
