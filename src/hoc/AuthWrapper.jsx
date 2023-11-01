import { Navigate  } from "react-router-dom";
import { useAuth } from "../context/ReactQueryContext";

const AuthWrapper = (WrappedComponent) => {
    return (props) => {
        const { isAuthenticated } = useAuth();
        if(isAuthenticated){
            return <WrappedComponent {...props} />;
        }else{
            return <Navigate  to='/login' />;
        }
    }
}

export default AuthWrapper;