import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import authService from "../auth/authService";

import Logo from "../resources/salonsameeralogo.png";

const Login = () => {
  const { logIn } = useAuth();
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const result = await authApi.login(email, password);
  
      if (result.ok) {
        const loggedInUser = result.data.user; // Get user details
        const token = result.data.access_token; // Use access_token from the response
        authService.storeToken(token);
        logIn(token, loggedInUser);
  
        // Pass the entire user object and token if needed
        navigation.navigate("AdminDashboard", { user: loggedInUser, token });
        // You may also want to navigate to AdminProfile if needed directly here.
      } else {
        setError(true);
        setErrorMessage(result.data?.message || "An unknown error occurred.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Login failed. Please try again.");
      setError(true);
    }
  };
  

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email Address"
          placeholderTextColor="#6e6e6e"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#6e6e6e"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignup} style={styles.signupContainer}>
        <Text style={styles.signupText}>New to Sterling Glam? </Text>
        <Text
          style={[styles.signupText, styles.signupHighlight]}
          onPress={handleSignup}
        >
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 220,
    height: 220,
    marginBottom: 50,
  },
  inputView: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
    borderColor: "#000000",
    borderWidth: 1,
    // backgroundColor: '#f2f2f2',
  },
  inputText: {
    height: 50,
    color: "#24150E",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#000000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  signupText: {
    color: "#141414",
    fontSize: 16,
  },
  signupHighlight: {
    color: "#24150E",
    fontSize: 16,
    marginLeft: 5,
  },
});

export default Login;
