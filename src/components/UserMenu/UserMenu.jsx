import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css'
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/slice';
import { useGetCurrentUserQuery, useLogOutMutation } from 'redux/auth';
import { useEffect, useState } from 'react';



const UserMenu = () => {
    const [name, setName] = useState()
    const [doLogout] = useLogOutMutation();
    const dispatch = useDispatch()
    const navigate = useNavigate()
const {data} = useGetCurrentUserQuery();

useEffect(() => {
if(data) {
    setName(data.name)
}
}, [data])


const handleLogOut = ()=> {
    doLogout();
    dispatch(logOut());
    navigate('/login')
    window.location.reload(true)
}

    return(
        <div className={css.userMenu}>
            <p className={css.userMenuEmail}>Welcome, {name}</p>
            <button className={css.userMenuBtn} onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
export {UserMenu}