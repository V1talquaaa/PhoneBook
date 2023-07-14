import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({restricted = false, redirectTo = "/"}) => {
    const {token} = useSelector((state) => state.auth);
    const shouldRedirect = token && restricted;

    return shouldRedirect? <Navigate to={redirectTo} /> : <Outlet />
}

export {PublicRoute}