import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css'
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/slice';
import { useGetCurrentUserQuery } from 'redux/auth';
const UserMenu = () => {
    const {data} = useGetCurrentUserQuery();

    const dispatch = useDispatch()
    const navigate = useNavigate()


const handleLogOut = ()=> {
    dispatch(logOut());
    navigate('/login')
}

    return(
        <div className={css.userMenu}>
            <p className={css.userMenuEmail}></p>
            <button className={css.userMenuBtn} onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
export {UserMenu}