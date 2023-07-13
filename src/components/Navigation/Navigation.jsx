import { NavLink } from "react-router-dom"
import css from './Navigation.module.css'
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";

const Navigation = () => {

    const isAuthorized = useSelector(state => state.auth.token)

    return (
        <div className={css.navWrap}>
            <NavLink to='/' className={css.home}>Home</NavLink>
            {isAuthorized ? 
            <UserMenu email={isAuthorized.email}/> :
            <div>
            <NavLink to='/register' className={css.register}>Register</NavLink>
            <NavLink to='/login' className={css.login}>Login</NavLink>
            </div>
            }

        </div>
    )
}

export {Navigation}