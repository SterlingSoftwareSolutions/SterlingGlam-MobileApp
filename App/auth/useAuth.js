import { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from "./context";
import authService from "./authService";

export default useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logIn = async (authToken, user) => {
        setUser(user);
        console.log('User login:', user);

        // Store user and token in AsyncStorage
        await AsyncStorage.setItem('authToken', authToken);
        await AsyncStorage.setItem('user', JSON.stringify(user));
        authService.storeUser(user);
        authService.storeToken(authToken);
    };

    const logOut = async () => {
        setUser(null);
        await AsyncStorage.removeItem('authToken');
        await AsyncStorage.removeItem('user');
    };

    return { logIn, logOut };
};
