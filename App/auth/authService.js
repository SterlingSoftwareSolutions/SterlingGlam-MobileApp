import AsyncStorage from "@react-native-async-storage/async-storage";

const storeToken = async (token) => {
    try {
        if (token) {
            await AsyncStorage.setItem('authToken', token);
            console.log('Token stored successfully:', token); 
        } else {
            await AsyncStorage.removeItem('authToken');
            console.log('Token removed from storage.'); 
        }
    } catch (error) {
        console.error('Error storing token:', error);
    }
};

const storeUser = async (user) => {
    try {
        if (user) {
            const userJSON = JSON.stringify(user);
            await AsyncStorage.setItem('user', userJSON);
            console.log('User stored successfully:', userJSON); 
        } else {
            await AsyncStorage.removeItem('user');
            console.log('User removed from storage.'); 
        }
    } catch (error) {
        console.error('Error storing user:', error);
    }
};

const getToken = async () => {
    try {
        const token = await AsyncStorage.getItem('authToken');
        console.log('Retrieved token:', token); 
        return token;
    } catch (error) {
        console.error('Error getting token:', error);
        return null;
    }
};

const getUser = async () => {
    try {
        const userJSON = await AsyncStorage.getItem('user');
        const user = userJSON ? JSON.parse(userJSON) : null;
        console.log('Retrieved user:', user); 
        return user;
    } catch (error) {
        console.error('Error getting user:', error);
        return null;
    }
};

export default { storeToken, storeUser, getToken, getUser };
