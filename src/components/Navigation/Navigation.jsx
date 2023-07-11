import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
import { useGetCurrentUserQuery } from "redux/auth"
import { UserMenu } from "components/UserMenu/UserMenu";

const Navigation = () => {
    const {data: isAuthorized} = useGetCurrentUserQuery();
    console.log(isAuthorized);
    return (
        <div className={css.navWrap}>
            <NavLink to='/' className={css.home}>Home</NavLink>
            {isAuthorized ? 
            <UserMenu /> :
            <div>
            <NavLink to='/register' className={css.register}>Register</NavLink>
            <NavLink to='/login' className={css.login}>Login</NavLink>
            </div>
            }

        </div>
    )
}

export {Navigation}