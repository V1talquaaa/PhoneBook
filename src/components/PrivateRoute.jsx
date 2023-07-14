import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

    const PrivateRoute = ({redirectTo = "/" }) => {
        const {token} = useSelector((state) => state.auth);
        return token ? <Outlet /> : <Navigate to={redirectTo} />;
    }

    export {PrivateRoute}