import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css'
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/slice';
import { useGetCurrentUserQuery, useLogOutMutation } from 'redux/auth';
const UserMenu = () => {
    const [logout] = useLogOutMutation();
    const {data} = useGetCurrentUserQuery();
    const name = data.name
    console.log(data.name)
  

    const dispatch = useDispatch()
    const navigate = useNavigate()


const handleLogOut = ()=> {
    logout();
    dispatch(logOut());
    navigate('/login')
}

    return(
        <div className={css.userMenu}>
            <p className={css.userMenuEmail}>{name}</p>
            <button className={css.userMenuBtn} onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
export {UserMenu}