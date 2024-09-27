import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import Footer from "../components/footer"; // Import the Footer component

const ServiceCategoryScreen = ({ navigation }) => {
  const [stylists, setStylists] = useState(["Allen", "Anderson", "Clinton"]);

  const removeStylist = (index) => {
    const updatedStylists = stylists.filter((_, i) => i !== index);
    setStylists(updatedStylists);
  };

  const addStylist = () => {
    setStylists([...stylists, `Stylist ${stylists.length + 1}`]);
  };

  const deleteService = () => {
    // Add your delete logic here
    console.log("Service deleted");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Haircuts</Text>

        {/* Service Name */}
        <Text style={styles.label}>Service Category Name</Text>
        <TextInput style={styles.input} value="Haircuts" editable={false} />

        {/* Categories */}
        <Text style={styles.label}>Services</Text>
        <View style={styles.categoriesContainer}>
          {[
            "Buzz Cut",
            "Crew Cut",
            "Under Cut",
            "Fade",
            "Pompadour",
            "Side Part",
            "Textured Crop",
            "Quiff",
            "Long Hair",
            "Ivy League",
          ].map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryButton}>
              <Text>{category}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.categoryButton}>
            <Text>+ Add</Text>
          </TouchableOpacity>
        </View>

        {/* Stylists */}
        <Text style={styles.label}>Stylists</Text>
        <View style={styles.stylistsContainer}>
          {stylists.map((stylist, index) => (
            <View key={index} style={styles.stylistItem}>
              <Text style={styles.stylistName}>{stylist}</Text>
              <TouchableOpacity
                onPress={() => removeStylist(index)}
                style={styles.removeButton}
              >
                <Text>-</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity
            onPress={addStylist}
            style={styles.addStylistButton}
          >
            <Text>+ Add Stylist</Text>
          </TouchableOpacity>
        </View>

        {/* Update Button */}
        <TouchableOpacity style={styles.updateButton}>
          <Text style={styles.updateButtonText}>Update</Text>
        </TouchableOpacity>

        {/* Delete Service Button */}
        <TouchableOpacity style={styles.deleteButton} onPress={deleteService}>
          <Text style={styles.deleteButtonText}>Delete Service</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
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
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  categoriesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    width: '30%',
    alignItems: 'center',
  },
  stylistsContainer: {
    marginBottom: 20,
  },
  stylistItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  stylistName: {
    fontSize: 16,
  },
  removeButton: {
    backgroundColor: "#D0D0D0",
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#000",
    width:40,
    alignItems: "center",
  },
  addStylistButton: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
  },
  updateButton: {
    color: "#fff",
    backgroundColor: "#000",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  deleteButton: {
    backgroundColor: "#D3D3D3",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    width: '80%',
    alignSelf: 'center',
  },
  deleteButtonText: {
    color: "#FF0000",
    fontSize: 16,
    fontWeight: "bold",
  },
  updateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ServiceCategoryScreen;
