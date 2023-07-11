import { Login } from "screens/Login/Login"
import { Register } from "../../screens/Register/Register"
import css from './AuthNav.module.css'
import { useGetCurrentUserQuery } from "redux/auth";

const AuthNav = () => {
    const isUserAuthorized = useGetCurrentUserQuery();
    console.log(isUserAuthorized)


    return (
        <div className={css.authNav}>
        <Register className={css.register}/>
        <Login className={css.login} />
        </div>
    )
}

export { AuthNav }