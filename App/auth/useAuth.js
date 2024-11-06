import { useContext } from "react";
import authService from "./authService";
import AuthContext from "./context";


export default function useAuth() {
    const { user, setUser } = useContext(AuthContext);

    const logIn = async (authToken, userData) => {
        setUser(userData);
        await authService.storeToken(authToken);
        await authService.storeUser(userData);
    };

    const logOut = async () => {
        setUser(null);
        await authService.storeToken(null);
        await authService.storeUser(null);
    };

    return { user, logIn, logOut };
}
