import {useContext} from 'react';
import AuthContext from "./context";
import authService from "./authService";

export default useAuth = () => {
    const {user, setUser} = useContext(AuthContext);

    const logIn = (authToken, user) => {
        setUser(user);
        console.log('User login:', user);
        authService.storeUser(user);
        authService.storeToken(authToken);
    };

  return { logIn };
};
