import { useContext } from 'react';
import AuthContext from "./context";
import authService from "./authService";

const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logIn = (authToken, user) => {
        setUser(user);
        console.log('User login:', user);
        authService.storeUser(user);
        authService.storeToken(authToken);
    };

    const getUser = () => {
        return user;  // Return the current user from context
    };

    return { logIn, getUser, setUser };  // Include setUser in the return statement
};

export default useAuth;
