import AsyncStorage from "@react-native-async-storage/async-storage";

const storeToken = async (token) => {
  try {
    if (token) {
      await AsyncStorage.setItem("authToken", token);
    } else {
      await AsyncStorage.removeItem("authToken");
    }
  } catch (error) {
    console.error("Error storing token:", error);
  }
};

const storeUser = async (user) => {
  try {
    if (user) {
      const userJSON = JSON.stringify(user);
      await AsyncStorage.setItem("user", userJSON);
    } else {
      await AsyncStorage.removeItem("user");
    }
  } catch (error) {
    console.error("Error storing user:", error);
  }
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem("authToken");
    return token;
  } catch (error) {
    console.error("Error getting token:", error);
    return null;
  }
};

const getUser = async () => {
  try {
    const userJSON = await AsyncStorage.getItem("user");
    return userJSON ? JSON.parse(userJSON) : null;
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
};

export default { storeToken, storeUser, getToken };
