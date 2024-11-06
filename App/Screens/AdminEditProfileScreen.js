import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import useAuth from "../auth/useAuth"; // Import your useAuth hook
import authClient from "../api/authClient";

const localProfilePicture = require("../resources/specialist1.jpeg");

const AdminEditProfileScreen = () => {
  const { getUser, setUser } = useAuth(); // Get user and setUser from auth context
  const userDetails = getUser(); // Fetch user details from auth context

  // State management
  const [firstName, setFirstName] = useState(userDetails.first_name || "");
  const [lastName, setLastName] = useState(userDetails.last_name || "");
  const [email, setEmail] = useState(userDetails.email || "");
  const [password, setPassword] = useState(""); // Initially empty password
  const [passwordConfirmation, setPasswordConfirmation] = useState(""); // Initialize password confirmation state
  const [phoneNumber, setPhoneNumber] = useState(
    userDetails.phone_number || ""
  );
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleSave = async () => {
    try {
      const updatedUser = {
        first_name: firstName,
        last_name: lastName,
        email,
        password, // Include password only if it has changed
        password_confirmation: passwordConfirmation,
        phone_number: phoneNumber,
      };

      const response = await authClient.post(
        `/user/${userDetails.id}`,
        updatedUser
      );

      console.log("API Response:", response);

      if (response.status === 200) {
        // Update local state with new values
        setFirstName(updatedUser.first_name);
        setLastName(updatedUser.last_name);
        setEmail(updatedUser.email);
        setPhoneNumber(updatedUser.phone_number);

        // Update the user context with new user data
        const newUserDetails = { ...userDetails, ...updatedUser }; // Merge the existing details with the updated ones
        setUser(newUserDetails); // Update the user in context

        Alert.alert("Success", "Profile updated successfully!");
        setIsEditable(false);
      } else {
        Alert.alert("Error", "Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Alert.alert("Error", "An error occurred while updating your profile.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Accounts Settings</Text>
      <View style={styles.profileSection}>
        <Image source={localProfilePicture} style={styles.profileImage} />
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <View style={styles.inputSection}>
        <Text style={styles.label}>First Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={firstName}
            editable={isEditable}
            onChangeText={setFirstName}
          />
          {!isEditable && (
            <TouchableOpacity style={styles.editIcon} onPress={handleEdit}>
              <Text style={styles.editText}>✎</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.label}>Last Name</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={lastName}
            editable={isEditable}
            onChangeText={setLastName}
          />
          {!isEditable && (
            <TouchableOpacity style={styles.editIcon} onPress={handleEdit}>
              <Text style={styles.editText}>✎</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.label}>Email</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            editable={isEditable}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          {!isEditable && (
            <TouchableOpacity style={styles.editIcon} onPress={handleEdit}>
              <Text style={styles.editText}>✎</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.label}>Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={password}
            editable={isEditable}
            onChangeText={setPassword}
            secureTextEntry
          />
          {!isEditable && (
            <TouchableOpacity style={styles.editIcon} onPress={handleEdit}>
              <Text style={styles.editText}>✎</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.label}>Confirm Password</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={passwordConfirmation}
            editable={isEditable}
            onChangeText={setPasswordConfirmation}
            secureTextEntry
          />
          {!isEditable && (
            <TouchableOpacity style={styles.editIcon} onPress={handleEdit}>
              <Text style={styles.editText}>✎</Text>
            </TouchableOpacity>
          )}
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            editable={isEditable}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          {!isEditable && (
            <TouchableOpacity style={styles.editIcon} onPress={handleEdit}>
              <Text style={styles.editText}>✎</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {isEditable && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
  inputSection: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    color: "black",
  },
  editIcon: {
    marginLeft: 10,
  },
  editText: {
    fontSize: 16,
    color: "gray",
  },
  saveButton: {
    backgroundColor: "#24150E",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 80,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AdminEditProfileScreen;
